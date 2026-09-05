"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

/** How long a noun holds before the next one takes over. */
const HOLD_MS = 3600;

/**
 * The vowel rule covers every noun in the list today. A word that breaks it
 * ("a unicorn", "an hour") can be written with its article already attached —
 * anything arriving with one is passed through untouched.
 */
function withArticle(noun: string): string {
  if (/^an?\s/i.test(noun)) return noun;
  return `${/^[aeiou]/i.test(noun) ? "an" : "a"} ${noun}`;
}

function spokenSentence(phrases: string[]): string {
  if (phrases.length === 0) return "";
  if (phrases.length === 1) return `I'm ${phrases[0]}.`;
  return `I'm ${phrases.slice(0, -1).join(", ")}, and ${phrases.at(-1)}.`;
}

interface RotatingNounProps {
  nouns: readonly string[];
  className?: string;
}

/**
 * Cycles a short list of self-descriptions. Each phrase sits in the same grid
 * cell, so the box is sized to the longest one and the line never reflows as
 * the words swap.
 */
export function RotatingNoun({ nouns, className }: RotatingNounProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [slot, setSlot] = useState({ index: 0, previous: -1 });

  useEffect(() => {
    if (reducedMotion || nouns.length < 2) return;

    const id = window.setInterval(() => {
      setSlot(({ index }) => ({
        index: (index + 1) % nouns.length,
        previous: index,
      }));
    }, HOLD_MS);

    return () => window.clearInterval(id);
  }, [nouns.length, reducedMotion]);

  const phrases = nouns.map(withArticle);

  return (
    <>
      {/* Assistive tech gets the list as one plain sentence rather than a
          value that rewrites itself every couple of seconds. */}
      <span className="sr-only">{spokenSentence(phrases)}</span>
      <span aria-hidden="true" className={cn("noun-rotator", className)}>
        {phrases.map((phrase, index) => (
          <span
            key={index}
            className={cn(
              "noun-rotator-slide",
              index === slot.previous && "is-leaving",
              index === slot.index && "is-active",
            )}
          >
            {phrase}
          </span>
        ))}
      </span>
    </>
  );
}
