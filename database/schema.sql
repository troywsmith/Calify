DROP DATABASE calendardb;
CREATE DATABASE calendardb;

\c calendardb;

DROP TABLE IF EXISTS events;

CREATE TABLE events (
  id SERIAL PRIMARY KEY NOT NULL,
  month TEXT NOT NULL,
  day INTEGER NOT NULL,
  description TEXT,
  team TEXT
);

