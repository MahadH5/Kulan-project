import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

// Convex Auth owns `users` (plus a few internal tables for accounts,
// sessions, etc.) via authTables — it manages credentials itself, so
// there's no manual passwordHash field anymore. Everything else below
// is unchanged from the previous draft.

export default defineSchema({
  ...authTables,

  // One row per category (Arts & Culture, Tech, Health & Wellness, ...).
  categories: defineTable({
    label: v.string(),
    emoji: v.optional(v.string()),
  }),

  // One row per event — what the event cards display.
  events: defineTable({
    title: v.string(),
    description: v.string(),
    categoryId: v.id("categories"),
    date: v.string(),
    location: v.optional(v.string()),
    isOnline: v.boolean(),
    onlineUrl: v.optional(v.string()),
    image: v.string(),
    capacity: v.number(),
    organizerId: v.id("users"),
  })
    .index("by_organizer", ["organizerId"])
    .index("by_category", ["categoryId"]),

  // One row per RSVP — a join between users and events.
  rsvps: defineTable({
    eventId: v.id("events"),
    userId: v.id("users"),
  })
    .index("by_event", ["eventId"])
    .index("by_user", ["userId"]),
});
