// Privacy Policy and Terms of Use from the owner go here VERBATIM.
// Only markup changes are allowed: section headings become "## " lines,
// bullets become "- " lists. Never paraphrase the wording.
//
// PLACEHOLDER: the owner hasn't sent the documents yet (2026-11-11).
// Until then `body` is null and the page shows a short notice instead.

export const legalUpdated = "PLACEHOLDER"; // date from the documents

export type LegalDoc = {
  key: "privacy" | "terms";
  title: string;
  body: string | null;
  glance: [string, string][];
};

// "At a glance" cards are a site summary, not part of the documents.
// Rewrite them from the real text once it arrives.
export const privacy: LegalDoc = {
  key: "privacy",
  title: "Privacy Policy",
  body: null,
  glance: [
    ["What you give us", "Summary of the information the app handles, added from the policy."],
    ["How it is used", "Summary of how prompts, photos and results are processed."],
    ["Your choices", "Summary of deletion, access and contact rights."],
  ],
};

export const terms: LegalDoc = {
  key: "terms",
  title: "Terms of Use",
  body: null,
  glance: [
    ["Using the app", "Summary of who can use PixVerse and what is allowed."],
    ["Subscriptions", "Summary of Premium, the free trial, renewal and cancellation."],
    ["Your content", "Summary of who owns prompts, uploads and generated results."],
  ],
};
