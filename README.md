# mini_solo_book_catalog
For cataloging your books.


CREATE TABLE "books" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR(75) NOT NULL,
	"author" VARCHAR(50) NOT NULL,
	"year" INTEGER NOT NULL,
	"summary" VARCHAR (1000)
	);
	
	
CREATE TABLE "genres" (
	"id" SERIAL PRIMARY KEY,
	"genre" VARCHAR(25) NOT NULL
	);
	
