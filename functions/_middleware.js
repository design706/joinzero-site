// PRIVATE PREVIEW GATE (temporary, by Atul 2026-06-13).
// Blocks all public access to the SEO/GEO pages while we improve quality offline.
// We can still preview with the credentials. Remove this file to go public again.
const USER = "zero";
const PASS = "zero-build-3ad573";
export const onRequest = async (context) => {
  const { request, next } = context;
  const hdr = request.headers.get("Authorization") || "";
  const expected = "Basic " + btoa(USER + ":" + PASS);
  if (hdr === expected) return await next();
  return new Response("zero learn is private right now — back soon.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="zero learn (private preview)"',
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
};
