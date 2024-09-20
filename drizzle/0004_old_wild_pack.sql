ALTER TABLE "cpus" ALTER COLUMN "price" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "cpus" ALTER COLUMN "core_count" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "cpus" ALTER COLUMN "core_clock" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "cpus" ALTER COLUMN "boost_clock" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "cpus" ALTER COLUMN "tdp" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "cpus" ALTER COLUMN "smt" DROP NOT NULL;