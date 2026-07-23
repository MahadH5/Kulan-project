// Central content/data source for the Kulan site.
// Keeping all copy and image references here keeps components presentational.

export const nav = {
  logoText: "Kulan",
  language: "English",
  login: "Log in",
  signup: "Sign up",
};

export const search = {
  placeholder: "Search events...",
  location: "Minneapolis, MN",
};

export const hero = {
  subtext:
    "Whatever your interest, from hiking and reading to networking and skill sharing, there are thousands of people who share it on Kulan. Events are happening every day—sign up to join the fun.",
  ctaLabel: "Join Kulan",
  images: {
    nearYou: {
      tag: "NEAR YOU",
      alt: "Friends laughing together at an outdoor gathering",
      src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&q=80",
    },
    danceClass: {
      tag: "DANCE CLASS",
      alt: "Two women dancing joyfully in a class",
      src: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=400&q=80",
    },
    speakingClub: {
      tag: "SPEAKING CLUB",
      alt: "Group of friends smiling together",
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=80",
    },
    everyThursday: {
      tag: "EVERY THURSDAY",
      alt: "Couple enjoying a cooking class together",
      src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80",
    },
  },
};

export const nearbyEventsSection = {
  heading: "Events near",
  location: "Minneapolis, MN",
  seeAllLabel: "See all events",
  events: [
    {
      id: "ne-1",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&q=80",
      date: "Thu, Jul 24 · 6:00 PM",
      title: "Sunset Hiking & Photography Walk",
      group: "Minneapolis Outdoor Adventurers",
      attendees: 42,
    },
    {
      id: "ne-2",
      image:
        "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=400&q=80",
      date: "Fri, Jul 25 · 7:00 PM",
      title: "Board Games & Board Beers",
      group: "Twin Cities Tabletop Club",
      attendees: 28,
    },
    {
      id: "ne-3",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
      date: "Sat, Jul 26 · 9:00 AM",
      title: "Beginner-Friendly Pottery Workshop",
      group: "Clay & Co. Makers",
      attendees: 15,
    },
    {
      id: "ne-4",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
      date: "Sat, Jul 26 · 11:00 AM",
      title: "Farmers Market Meetup & Brunch",
      group: "Minneapolis Foodies Collective",
      attendees: 33,
    },
  ],
};

export const onlineEventsSection = {
  heading: "Online events",
  seeAllLabel: "See all events",
  events: [
    {
      id: "oe-1",
      image:
        "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400&q=80",
      date: "Mon, Jul 27 · 6:00 PM",
      title: "Intro to Watercolor Painting",
      group: "Virtual Creatives Circle",
      attendees: 61,
    },
    {
      id: "oe-2",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=80",
      date: "Tue, Jul 28 · 12:00 PM",
      title: "Resume & LinkedIn Power Hour",
      group: "Career Changers Network",
      attendees: 87,
    },
    {
      id: "oe-3",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&q=80",
      date: "Wed, Jul 29 · 7:30 PM",
      title: "Beginner Spanish Conversation Practice",
      group: "Language Exchange Online",
      attendees: 54,
    },
    {
      id: "oe-4",
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e4?w=400&q=80",
      date: "Thu, Jul 30 · 6:30 PM",
      title: "Personal Finance for Beginners",
      group: "Money Mindset Community",
      attendees: 76,
    },
  ],
};

export const membershipCta = {
  heading: "Become a Kulan member",
  subtext:
    "Get access to member-only events, discounts, and a community that shares your interests—wherever you are.",
  ctaLabel: "Join Kulan",
};

export const eventCategories = {
  heading: "Explore by category",
  categories: [
    { id: "cat-1", emoji: "🎨", label: "Arts & Culture" },
    { id: "cat-2", emoji: "💻", label: "Tech" },
    { id: "cat-3", emoji: "🏃", label: "Health & Wellness" },
    { id: "cat-4", emoji: "🍳", label: "Food & Drink" },
    { id: "cat-5", emoji: "📚", label: "Writing" },
    { id: "cat-6", emoji: "🎮", label: "Games" },
    { id: "cat-7", emoji: "🌱", label: "Outdoors" },
    { id: "cat-8", emoji: "🎵", label: "Music" },
  ],
};

export const popularCities = {
  heading: "Popular cities in Minnesota",
  cities: [
    {
      id: "city-1",
      name: "Minneapolis",
      image:
        "https://images.unsplash.com/photo-1543931048-2b8b8a2a0b2a?w=400&q=80",
    },
    {
      id: "city-2",
      name: "Saint Paul",
      image:
        "https://images.unsplash.com/photo-1601040780438-cb9cb61b5f24?w=400&q=80",
    },
    {
      id: "city-3",
      name: "Rochester",
      image:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&q=80",
    },
    {
      id: "city-4",
      name: "Duluth",
      image:
        "https://images.unsplash.com/photo-1508261301700-a1e01d70a3ca?w=400&q=80",
    },
    {
      id: "city-5",
      name: "Bloomington",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=400&q=80",
    },
    {
      id: "city-6",
      name: "St. Cloud",
      image:
        "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=400&q=80",
    },
  ],
};

export const howItWorks = {
  heading: "How Kulan works",
  steps: [
    {
      id: "step-1",
      emoji: "🔎",
      title: "Find your people",
      text: "Search by interest or location to discover groups and events happening near you.",
    },
    {
      id: "step-2",
      emoji: "🙋",
      title: "RSVP to an event",
      text: "Pick something that excites you and reserve your spot in just a couple of taps.",
    },
    {
      id: "step-3",
      emoji: "🤝",
      title: "Show up and connect",
      text: "Meet new people who share your interests and turn strangers into friends.",
    },
  ],
};

export const communityStories = {
  heading: "Community stories",
  stories: [
    {
      id: "story-1",
      quote:
        "I moved to a new city knowing no one. Within a month of joining a hiking group here, I had a whole crew of friends.",
      name: "Amina R.",
      group: "Member of Minneapolis Outdoor Adventurers",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    },
    {
      id: "story-2",
      quote:
        "Our board game nights started with six strangers. Two years later, we're each other's closest friends.",
      name: "Devon K.",
      group: "Organizer of Twin Cities Tabletop Club",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    },
    {
      id: "story-3",
      quote:
        "Practicing Spanish online every week gave me the confidence to travel solo for the first time.",
      name: "Priya S.",
      group: "Member of Language Exchange Online",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
    },
  ],
};

export const footer = {
  columns: [
    {
      id: "col-1",
      heading: "Kulan",
      links: [
        { label: "About", to: "/" },
        { label: "Careers", to: "/" },
        { label: "Press", to: "/" },
        { label: "Blog", to: "/" },
      ],
    },
    {
      id: "col-2",
      heading: "Discover",
      links: [
        { label: "Events", to: "/events" },
        { label: "Categories", to: "/categories" },
        { label: "Cities", to: "/cities" },
      ],
    },
    {
      id: "col-3",
      heading: "Organize",
      links: [
        { label: "Start a group", to: "/" },
        { label: "Organizer resources", to: "/" },
        { label: "Event planning guide", to: "/" },
      ],
    },
    {
      id: "col-4",
      heading: "Support",
      links: [
        { label: "Help center", to: "/" },
        { label: "Terms of service", to: "/" },
        { label: "Privacy policy", to: "/" },
        { label: "Cookie policy", to: "/" },
      ],
    },
  ],
  socials: ["Instagram", "Facebook", "X"],
  copyright: "© 2026 Kulan. All rights reserved.",
};

export const authPages = {
  login: {
    heading: "Welcome back",
    subtext: "Log in to keep up with your groups and upcoming events.",
    emailLabel: "Email address",
    passwordLabel: "Password",
    submitLabel: "Log in",
    switchPrompt: "New to Kulan?",
    switchLinkLabel: "Sign up",
    switchTo: "/signup",
  },
  signup: {
    heading: "Join Kulan",
    subtext:
      "Create an account to find people who share your interests near you.",
    nameLabel: "Full name",
    emailLabel: "Email address",
    passwordLabel: "Password",
    submitLabel: "Sign up",
    switchPrompt: "Already have an account?",
    switchLinkLabel: "Log in",
    switchTo: "/login",
  },
};

export const eventsPage = {
  heading: "All events",
  subtext: "Everything happening in and around Minneapolis, MN.",
  tabs: [
    { id: "nearby", label: "Near you" },
    { id: "online", label: "Online" },
  ],
};

export const categoriesPage = {
  heading: "Browse by category",
  subtext: "Find the kind of events that match what you're into.",
};

export const citiesPage = {
  heading: "Popular cities",
  subtext: "See what's happening in cities across Minnesota.",
};
