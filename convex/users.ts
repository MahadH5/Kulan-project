import { query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

// The logged-in user's own profile, or null if nobody is logged in.
// Used by the private dashboard page.
export const viewer = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      return null;
    }
    return await ctx.db.get(userId);
  },
});
