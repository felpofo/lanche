create table
  public.breakfasts (
    id uuid not null default gen_random_uuid (),
    date timestamp with time zone not null default (now() at time zone 'utc'::text),
    user_id uuid not null,
    constraint breakfasts_pkey primary key (id),
    constraint breakfasts_user_id_fkey foreign key (user_id) references auth.users (id) on delete cascade
  ) tablespace pg_default;

-- create policy "Enable read access to all users"
-- on public.breakfasts
-- for select using (true);

-- create policy "Enable insert access to all users"
-- on public.breakfasts
-- as permissive for insert
-- to public
-- with check (true);

-- create policy "Enable delete access to all users"
-- on public.breakfasts
-- for select using (true);

create table
  public.lunches (
    id uuid not null default gen_random_uuid (),
    date timestamp with time zone not null default (now() at time zone 'utc'::text),
    user_id uuid not null,
    constraint lunches_pkey primary key (id),
    constraint lunches_user_id_fkey foreign key (user_id) references auth.users (id) on delete cascade
  ) tablespace pg_default;

-- create policy "Enable read access to all users"
-- on public.lunches
-- for select using (true);

-- create policy "Enable insert access to all users"
-- on public.lunches
-- as permissive for insert
-- to public
-- with check (true);

-- create policy "Enable delete access to all users"
-- on public.lunches
-- for select using (true);

create or replace function "delete_user"()
  returns void
language sql security definer
as $$
  delete from auth.users where id = auth.uid();
$$;
