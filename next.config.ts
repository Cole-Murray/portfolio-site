import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // AGENTS.md is a hand-authored contract in this repo; keep `next dev` from
  // appending its own generated block to it.
  agentRules: false,
  // The dev overlay badge parks itself in the bottom-left corner, right on top
  // of the hero's scroll cue. Production is unaffected either way.
  devIndicators: false,
};

export default nextConfig;
