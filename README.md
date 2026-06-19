# Narayana Seva Dal

> Serving Humanity, One Meal at a Time.

Official website for Narayana Seva Dal — a volunteer-driven community charity established in 2019 in Guntur, Andhra Pradesh, India.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Backend:** Supabase (PostgreSQL + Auth + Storage)
- **Email:** Resend
- **Deployment:** Hostinger

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+
- Supabase project
- Resend account

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/narayana-seva-dal.git
cd narayana-seva-dal

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local
# Edit .env.local with your credentials

# Run the Supabase schema
# Execute supabase/schema.sql in your Supabase SQL editor

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/          # Next.js App Router pages and API routes
├── components/   # React components organized by feature
├── lib/          # Utilities, Supabase clients, validators
├── hooks/        # Custom React hooks
└── types/        # TypeScript type definitions
```

## Deployment

This project uses `output: 'standalone'` for Hostinger deployment.

```bash
npm run build
```

## License

All rights reserved © Narayana Seva Dal
