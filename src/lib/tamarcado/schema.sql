-- Schema for TaMarcado MVP (Calendly Clone)

-- 1. Profiles (Users who can be booked)
CREATE TABLE IF NOT EXISTS tamarcado_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  slug TEXT UNIQUE NOT NULL, -- e.g., 'alexandre' for /book/alexandre
  display_name TEXT NOT NULL,
  description TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Event Types (e.g. 30min chat, 1h consulting)
CREATE TABLE IF NOT EXISTS tamarcado_event_types (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id UUID REFERENCES tamarcado_profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  duration_minutes INTEGER NOT NULL DEFAULT 30,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Bookings (The actual appointments)
CREATE TABLE IF NOT EXISTS tamarcado_bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_type_id UUID REFERENCES tamarcado_event_types(id) ON DELETE CASCADE,
  profile_id UUID REFERENCES tamarcado_profiles(id) ON DELETE CASCADE,
  guest_name TEXT NOT NULL,
  guest_email TEXT NOT NULL,
  guest_notes TEXT,
  start_time TIMESTAMPTZ NOT NULL,
  end_time TIMESTAMPTZ NOT NULL,
  status TEXT DEFAULT 'confirmed', -- confirmed, cancelled
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Basic RLS setup for Profiles
ALTER TABLE tamarcado_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Profiles are viewable by everyone."
  ON tamarcado_profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can insert their own profile."
  ON tamarcado_profiles FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile."
  ON tamarcado_profiles FOR UPDATE
  USING (auth.uid() = user_id);

-- Basic RLS setup for Event Types
ALTER TABLE tamarcado_event_types ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Event types are viewable by everyone."
  ON tamarcado_event_types FOR SELECT
  USING (true);

CREATE POLICY "Users can manage their own event types."
  ON tamarcado_event_types FOR ALL
  USING (profile_id IN (SELECT id FROM tamarcado_profiles WHERE user_id = auth.uid()));

-- Basic RLS setup for Bookings
ALTER TABLE tamarcado_bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Guests can insert bookings"
  ON tamarcado_bookings FOR INSERT
  WITH CHECK (true); -- Public can book

CREATE POLICY "Users can view their own bookings"
  ON tamarcado_bookings FOR SELECT
  USING (profile_id IN (SELECT id FROM tamarcado_profiles WHERE user_id = auth.uid()));

CREATE POLICY "Users can update their own bookings"
  ON tamarcado_bookings FOR UPDATE
  USING (profile_id IN (SELECT id FROM tamarcado_profiles WHERE user_id = auth.uid()));
