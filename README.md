# Lanche

Do you want breakfast and/or lunch?

# Running

### Database

1. Create a `.env.local` file with supabase credentials that should be in your terminal
2. Source your supabase credentials by running `source .env.development` or `source .env.production`
2. Setup a dev supabase instance by running `yarn supabase start`, this will start an isolated supabase client with docker
3. Generate your database types running `yarn -s supabase gen types typescript --local 1> src/lib/database.d.ts`

### Client

Finally run `yarn dev` on your terminal to start the webpage

