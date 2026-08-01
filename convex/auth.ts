import { convexAuth } from "@convex-dev/auth/server";
import { Password } from "@convex-dev/auth/providers/Password";
import { ConvexError } from "convex/values";

// Server-side checks for signup/login. The client-side form already
// validates these, but that only stops the normal UI path — anyone
// calling the Convex API directly bypasses it. These run no matter
// how the call is made.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [
    Password({
      // Maps + sanitizes the fields SignupPage.jsx collects onto the
      // users table: trims stray whitespace, normalizes email to
      // lowercase (so "A@x.com" and "a@x.com" aren't treated as two
      // different accounts), and rejects malformed/missing input.
      profile(params) {
        const email = String(params.email ?? "")
          .trim()
          .toLowerCase();

        if (!EMAIL_PATTERN.test(email)) {
          throw new ConvexError("Please enter a valid email address.");
        }

        // Only signup submits a name — login only ever sends
        // email/password, so requiring a name here would (and did)
        // break every login attempt.
        if (params.flow === "signUp") {
          const name = String(params.name ?? "").trim();

          if (!name) {
            throw new ConvexError("Please enter your name.");
          }

          return { email, name };
        }

        return { email };
      },
      // Enforced server-side too, matching the client's own minimum.
      validatePasswordRequirements: (password) => {
        if (typeof password !== "string" || password.length < MIN_PASSWORD_LENGTH) {
          throw new ConvexError(
            `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`
          );
        }
      },
    }),
  ],
});
