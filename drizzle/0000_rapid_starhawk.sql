CREATE TABLE IF NOT EXISTS "cpus" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"price" integer NOT NULL,
	"core_count" integer NOT NULL,
	"core_clock" integer NOT NULL,
	"boost_clock" integer NOT NULL,
	"tdp" integer NOT NULL,
	"graphics" varchar(255) NOT NULL,
	"smt" boolean NOT NULL
);
