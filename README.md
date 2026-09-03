# Soole — Official Website

The public site for **Soole.ng**, a Nigerian intercity ridesharing platform connecting passengers with verified drivers already heading their way.

This repository is the marketing site and public policy pages. It is not the product — the apps live in `soole-mobile-app`, the operator console in `soole-dashboard`, and the API in `soole-backend`.

---

## Pages

| Route | Purpose |
|---|---|
| `/` | Landing page |
| `/riders` | How Soole works for passengers |
| `/drivers` | How Soole works for drivers |
| `/organizations` | Fleet and transport-company offering |
| `/about-us` | Company |
| `/contact-us` | Contact form |
| `/faq` | Frequently asked questions |
| `/privacy-policy` | Privacy policy |
| `/refund-policy` | Payments and refund policy |
| `/ride-tracking` | Live trip tracking for a shared trip link |

### `/ride-tracking` is the one page that talks to the API

Every other route is static content. Ride tracking reads a shared trip link and
renders the driver, vehicle and route from the backend, so somebody following a
relative's journey does not need the app installed. It calls the public tracking
endpoint through `services/tracking.ts` — see `NEXT_PUBLIC_BASE_URL` below.

### One price, everywhere

The refund policy and FAQ quote a single figure: what the passenger pays. Soole's
commission is included in it and is never broken out or named on the public site —
a passenger is quoted one number and charged that number. Keep it that way when
editing these pages.

---

## Structure

```
soole-official-website/
├── app/
│   ├── page.tsx              # Landing
│   ├── layout.tsx            # Root layout, fonts, metadata
│   ├── globals.css
│   ├── actions/              # Server actions
│   │   ├── submit-contact-form.ts
│   │   └── submit-email.ts   # Waitlist / newsletter capture
│   └── <route>/page.tsx      # One directory per route above
├── components/
│   ├── landing-page-components/
│   ├── organizations/
│   ├── ride-tracking/
│   ├── shared/               # Header, footer, cross-page pieces
│   └── ui/                   # shadcn/ui primitives
├── services/
│   ├── api.ts                # Axios instance pointed at the backend
│   └── tracking.ts           # Ride tracking queries and response types
├── lib/utils.ts              # cn() and helpers
├── utils/constants.ts        # Shared constants
└── public/                   # Images and static assets
```

---

## Getting started

```bash
npm install
npm run dev
```

Runs on **http://localhost:3210** (not 3000 — the port is set in `package.json`).

### Environment

Create `.env.local`:

```bash
# Backend API, used by the ride-tracking page
NEXT_PUBLIC_BASE_URL=https://your-api-url.com

# Google Sheets, used by the contact form and email capture server actions
GOOGLE_SHEET_ID=
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=
```

`GOOGLE_PRIVATE_KEY` contains newlines. Keep it quoted, with the `\n` escapes
intact, or the Sheets client fails to parse the key at runtime rather than at
build time — the contact form will look fine and silently drop submissions.

### Other scripts

```bash
npm run build     # Production build
npm run start     # Serve the production build
npm run lint      # ESLint
```

---

## Tech stack

| Concern | Choice |
|---|---|
| Framework | Next.js (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Components | shadcn/ui (`components.json`) |
| Data fetching | TanStack Query + Axios |
| Form capture | Server actions writing to Google Sheets |

---

## Related repositories

| Repository | What it is |
|---|---|
| `soole-backend` | Django + Django Ninja API, admin, payments |
| `soole-mobile-app` | Flutter app for drivers and passengers |
| `soole-dashboard` | React operator console for fleets |
