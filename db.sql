DROP DATABASE course_work_db_1;
CREATE DATABASE course_work_db_1;

CREATE TABLE course_work_db_1.stations (
	station_id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    station_type VARCHAR(30) NULL
);

CREATE TABLE course_work_db_1.subscribers (
	subscriber_id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
	subscriber_first_name VARCHAR(30) NULL,
    subscriber_last_name VARCHAR(30) NULL,
    subscriber_age INTEGER NULL,
    subscriber_gender VARCHAR(10) NULL,
    subscriber_address_index INTEGER NULL,
    subscriber_address_district VARCHAR(30) NULL,
    subscriber_address_street VARCHAR(30) NULL,
    subscriber_phone VARCHAR(30) NULL,
    subscriber_type VARCHAR(30) NULL,
    station_id INTEGER,
    FOREIGN KEY (station_id) REFERENCES stations (station_id)
);

CREATE TABLE course_work_db_1.subscriber_fees (
	subscriber_id INTEGER NOT NULL,
	subscriber_access BOOL DEFAULT TRUE,
    subscriber_intercity_access BOOL DEFAULT TRUE,
    subscriber_fee INTEGER NULL,
    subscriber_debt INTEGER DEFAULT 0,
    subscriber_intercity_debt INTEGER DEFAULT 0,
    FOREIGN KEY (subscriber_id) REFERENCES subscribers (subscriber_id)
);

CREATE TABLE course_work_db_1.phone_numbers (
	station_id INTEGER,
    phone_number VARCHAR(30) NULL,
    number_availability BOOL DEFAULT TRUE,
    FOREIGN KEY (station_id) REFERENCES stations (station_id)
);

CREATE TABLE course_work_db_1.public_phones (
	public_phone_id INTEGER NOT NULL PRIMARY KEY,
    public_phone_type VARCHAR(30) NULL,
    station_id INTEGER,
    public_phone_address_district VARCHAR(30) NULL,
    public_phone_address_street VARCHAR(30) NULL,
    FOREIGN KEY (station_id) REFERENCES stations (station_id)
);

CREATE TABLE course_work_db_1.intercity_log (
	intercity_call_id INTEGER NOT NULL PRIMARY KEY,
    intercity_call_date DATE NULL,
	subscriber_id INTEGER NOT NULL,
    intercity_call_destination VARCHAR(30) NULL,
    FOREIGN KEY (subscriber_id) REFERENCES subscribers (subscriber_id)
);

