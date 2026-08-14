import { githubCard } from "@/content";

export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export interface GitHubContributionDay {
  date: string;
  count: number;
  level: ContributionLevel;
}

export interface GitHubContributions {
  username: string;
  profileUrl: string;
  placeholder: boolean;
  note: string;
  /** Flattened week-major, Sunday-first — ready for a column-flow grid. */
  days: GitHubContributionDay[];
  weeks: number;
  stats: {
    contributions: number;
    publicRepos: number;
    streak: number;
  };
}

const GRAPHQL_ENDPOINT = "https://api.github.com/graphql";
/** Match the card width: denser than a full year, still reads as a real graph. */
const DISPLAY_WEEKS = 26;
const REVALIDATE_SECONDS = 60 * 60;

const CONTRIBUTION_QUERY = `
  query ContributionCard($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
      repositories(ownerAffiliations: OWNER, privacy: PUBLIC) {
        totalCount
      }
    }
  }
`;

type GraphqlLevel =
  | "NONE"
  | "FIRST_QUARTILE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"
  | "FOURTH_QUARTILE";

interface GraphqlDay {
  date: string;
  contributionCount: number;
  contributionLevel: GraphqlLevel;
}

interface GraphqlResponse {
  data?: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: Array<{ contributionDays: GraphqlDay[] }>;
        };
      };
      repositories: { totalCount: number };
    } | null;
  };
  errors?: Array<{ message: string }>;
}

const LEVEL_MAP: Record<GraphqlLevel, ContributionLevel> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

function formatCount(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

function formatStreak(days: number): string {
  return days === 1 ? "1 day" : `${days} days`;
}

/**
 * Walk backward from the most recent day. A zero today is allowed to keep an
 * otherwise live streak alive (GitHub's own profile does the same until the
 * day ends). Any earlier zero breaks it.
 */
export function currentStreak(days: GitHubContributionDay[]): number {
  if (days.length === 0) return 0;

  let index = days.length - 1;
  if (days[index].count === 0) index -= 1;

  let streak = 0;
  for (; index >= 0; index -= 1) {
    if (days[index].count === 0) break;
    streak += 1;
  }
  return streak;
}

function placeholderCard(): GitHubContributions {
  return {
    username: githubCard.username,
    profileUrl: githubCard.profileUrl,
    placeholder: true,
    note: githubCard.note,
    days: [],
    weeks: DISPLAY_WEEKS,
    stats: {
      contributions: 0,
      publicRepos: 0,
      streak: 0,
    },
  };
}

export async function getGitHubContributions(): Promise<GitHubContributions> {
  const token = process.env.GITHUB_TOKEN?.trim();
  if (!token) return placeholderCard();

  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "cole-murray-portfolio",
      },
      body: JSON.stringify({
        query: CONTRIBUTION_QUERY,
        variables: { login: githubCard.username },
      }),
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      console.error(
        `[github] GraphQL HTTP ${response.status} ${response.statusText}`,
      );
      return placeholderCard();
    }

    const payload = (await response.json()) as GraphqlResponse;
    if (payload.errors?.length || !payload.data?.user) {
      console.error(
        "[github] GraphQL errors:",
        payload.errors?.map((error) => error.message).join("; ") ??
          "user not found",
      );
      return placeholderCard();
    }

    const calendar =
      payload.data.user.contributionsCollection.contributionCalendar;
    const weeks = calendar.weeks.slice(-DISPLAY_WEEKS);
    const days = weeks.flatMap((week) =>
      week.contributionDays.map(
        (day): GitHubContributionDay => ({
          date: day.date,
          count: day.contributionCount,
          level: LEVEL_MAP[day.contributionLevel] ?? 0,
        }),
      ),
    );

    const streak = currentStreak(days);

    return {
      username: githubCard.username,
      profileUrl: githubCard.profileUrl,
      placeholder: false,
      note: `Live from GitHub · refreshed about hourly`,
      days,
      weeks: weeks.length,
      stats: {
        contributions: calendar.totalContributions,
        publicRepos: payload.data.user.repositories.totalCount,
        streak,
      },
    };
  } catch (error) {
    console.error("[github] fetch failed:", error);
    return placeholderCard();
  }
}

export function githubStatLabels(data: GitHubContributions) {
  if (data.placeholder) {
    return githubCard.stats;
  }

  return [
    {
      label: "Contributions / yr",
      value: formatCount(data.stats.contributions),
    },
    {
      label: "Public repos",
      value: formatCount(data.stats.publicRepos),
    },
    {
      label: "Current streak",
      value: formatStreak(data.stats.streak),
    },
  ];
}
