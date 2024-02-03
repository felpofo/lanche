# Lanche

Do you want breakfast and/or lunch?

this is a "smol" project that "organizes" eatings for, let's say, a restaurant ~~a brave one~~  
you, as the user, enter with your google account and select if you'ld want breakfast and/or lunch  
but this project it was over-engineered from the start
i could've used sqlite for that task but NO, WE NEED MORE
it's using svelte and a big fat ass supabase db ~~killing a ant with a nuclear missile~~

# How to run

### Database

1. Create a `.env.local` file with supabase credentials that should be in your terminal
2. Source your supabase credentials by sourcing it: `source .env.local`

#### Optional
1. Setup a dev supabase instance by running `yarn supabase start` (docker required)
2. Generate your database types running `yarn -s supabase:gen`

### Client

Finally run `yarn dev` on your terminal to start the webpage

