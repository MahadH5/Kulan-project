# Kulan

A React + Vite clone of the Meetup-style homepage shown in the reference screenshot, rebranded as **Kulan**, expanded into a full small site. No messaging, payments, maps, comments, or admin dashboard.

## Run it

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Routes

| Path          | Page               | Notes                                                             |
| -------------- | ------------------- | ------------------------------------------------------------------ |
| `/`            | `HomePage`          | All 8 body sections (see below)                                    |
| `/login`       | `LoginPage`         | Client-side validated form, demo success state (no backend)        |
| `/signup`      | `SignupPage`        | Same pattern, name + email + password                              |
| `/events`      | `EventsPage`        | "All events" with a Near you / Online tab toggle                   |
| `/categories`  | `CategoriesPage`    | Full category grid                                                 |
| `/cities`      | `CitiesPage`        | Full Popular Cities grid                                            |
| `*`            | `NotFoundPage`      | 404 with a link back home                                            |

Every page is wrapped by `layouts/Layout.jsx`, which renders `Header` → `<Outlet />` → `Footer`, plus a `ScrollToTop` helper so navigating between pages doesn't leave you scrolled halfway down the next one.

## The homepage — 11 sections, in order

1. **Header.jsx** — Kulan logo (`Link` to `/`), search input, location input, language toggle, and Log in / Sign up (`Link` to `/login` / `/signup`), pushed to the far right with `margin-left: auto` and spaced from the search bar
2. **Hero.jsx** — headline, subtext, "Join Kulan" CTA (`Link` to `/signup`), and the 4 overlapping photo cards (Near you, Dance class, Speaking club, Every Thursday), each loaded through `ProgressiveImage`
3. **NearbyEvents.jsx** — "Events near Minneapolis, MN" heading + grid of `EventCard`
4. **OnlineEvents.jsx** — "Online events" + grid of `EventCard`
5. **MembershipCTA.jsx** — pink banner, CTA links to `/signup`
6. **EventCategories.jsx** — category pills, each links to `/categories`
7. **PopularCities.jsx** — city tiles (`EventCard`, overlay variant), each links to `/cities`
8. **HowKulanWorks.jsx** — 3-step explainer
9. **CommunityStories.jsx** — testimonial cards
10. **Footer.jsx** — logo, tagline, socials, link columns (routed with `Link`), copyright

(Search/location live inside Header; "logo and navigation" + "search and location" from the original 11-item list are both part of `Header.jsx`.)

## Project structure

```
src/
  components/       # Shared building blocks used across pages
    Header.jsx / Header.css
    Hero.jsx / Hero.css
    EventCard.jsx / EventCard.css      # ONE card component, reused everywhere (variant="info" | "overlay", optional `to`)
    ProgressiveImage.jsx / .css        # Loading skeleton + error fallback for every image on the site
    EventsSection.css                  # Shared grid/heading styles for Nearby/Online/Cities sections
    NearbyEvents.jsx / OnlineEvents.jsx / MembershipCTA.jsx / EventCategories.jsx / PopularCities.jsx
    HowKulanWorks.jsx / CommunityStories.jsx / Footer.jsx
    PageHeader.jsx / .css              # Shared heading+subtext block for Events/Categories/Cities pages
    AuthCard.jsx / .css                # Shared card wrapper for Login/Signup
    ScrollToTop.jsx
  layouts/Layout.jsx                   # Header + Outlet + Footer + ScrollToTop
  pages/                               # One component per route
  data/siteData.js                     # All copy, labels, and image URLs — single source of content
  styles/
    variables.css                      # Design tokens: colors, type, spacing, radius — single source of truth
    global.css                         # Reset, base styles, global :focus-visible, reduced-motion handling
  App.jsx                              # <Routes> definition
  main.jsx                             # Entry point, wraps App in <BrowserRouter>
```

## Loading, empty, hover, and focus states

- **Loading skeleton:** every image (hero photos, every `EventCard`) goes through `ProgressiveImage` — a shimmering skeleton shown until the image loads.
- **Empty/error state:** if an image fails to load, `ProgressiveImage` shows a neutral broken-image icon instead of the browser default.
- **Hover states:** every interactive element — header controls, hero CTA, "See all events," category pills, city tiles, cards, form buttons, footer links/socials — has a hover treatment.
- **Focus states:** a global `:focus-visible` outline covers every link, button, and input (`global.css`); the header search bar highlights on `:focus-within`.
- **No dead links:** every clickable element is either a React Router `Link` pointing at a route that exists, or a plain `<button>` with no destination (search icon, category tiles on `/categories`, footer socials) — there are zero raw `<a href="...">` tags anywhere in the codebase pointing at a route that doesn't exist.

## Responsive behavior

Breakpoints at `1024px`, `768px`, `640px`, and `480px` across every component and page — grids collapse from 4 → 2 → 1 columns (6 → 3 → 2 for the wider city grids), and the header wraps its search bar on small screens.

## Design tokens

All colors, fonts, spacing, and radii live in `src/styles/variables.css` as CSS custom properties. No component hardcodes a raw hex value, px spacing, or font.

## Verified

- `npm run build` — clean, no errors
- `npm run lint` (oxlint) — 0 warnings, 0 errors
- No raw `href` attributes anywhere in `src/` (confirmed via grep)
