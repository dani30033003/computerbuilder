CREATE TABLE IF NOT EXISTS "cpus" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"price" real,
	"core_count" integer,
	"core_clock" real,
	"boost_clock" real,
	"tdp" integer,
	"graphics" varchar(255),
	"smt" boolean
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "cpu-coolers" (
	"name" varchar(255) NOT NULL,
	"price" real,
	"rpm" real[] NOT NULL,
	"noise_level" real[] NOT NULL,
	"color" varchar(255) NOT NULL,
	"size" integer NOT NULL
);
