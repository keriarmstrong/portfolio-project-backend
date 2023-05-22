DROP DATABASE IF EXISTS trackit_dev;

CREATE DATABASE trackit_dev;

\c trackit_dev;

CREATE TABLE parts (
id SERIAL PRIMARY KEY,
date DATE,
part VARCHAR(35),
part_number VARCHAR(35),
part_status VARCHAR(35),
new_sn VARCHAR(35),
old_sn VARCHAR(35),
tracking VARCHAR(30),
technician TEXT NOT NULL,
returnable BOOLEAN DEFAULT FALSE,
days_past_due SMALLINT
);