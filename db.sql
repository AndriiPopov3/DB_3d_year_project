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
    subscriber_phone_type VARCHAR(30) NULL,
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
    debt_time INTEGER NULL DEFAULT 0,
    FOREIGN KEY (subscriber_id) REFERENCES subscribers (subscriber_id)
);

CREATE TABLE course_work_db_1.phone_numbers (
	station_id INTEGER,
    phone_number VARCHAR(30) NULL,
    number_availability BOOL DEFAULT TRUE,
    FOREIGN KEY (station_id) REFERENCES stations (station_id)
);

CREATE TABLE course_work_db_1.public_phones (
	public_phone_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    public_phone_type VARCHAR(30) NULL,
    station_id INTEGER,
    public_phone_address_district VARCHAR(30) NULL,
    public_phone_address_street VARCHAR(30) NULL,
    FOREIGN KEY (station_id) REFERENCES stations (station_id)
);

CREATE TABLE course_work_db_1.intercity_log (
	intercity_call_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    intercity_call_date DATE NULL,
	subscriber_id INTEGER NOT NULL,
    station_id INTEGER NOT NULL,
    intercity_call_destination VARCHAR(30) NULL,
    FOREIGN KEY (subscriber_id) REFERENCES subscribers (subscriber_id),
    FOREIGN KEY (station_id) REFERENCES stations (station_id)
);
-- DROP TABLE course_work_db_1.queue_entry;
CREATE TABLE course_work_db_1.queue_entry (
	queue_entry_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	client_first_name VARCHAR(30) NULL,
    client_second_name VARCHAR(30) NULL,
	client_district VARCHAR(30) NULL,
    client_street VARCHAR(30) NULL,
    client_type VARCHAR(30) NULL,
    desired_phone_type VARCHAR(30) NULL
);

-- DROP TABLE course_work_db_1.queue;
CREATE TABLE course_work_db_1.queue (
	queue_entry_id INTEGER,
	queue_type VARCHAR(15) NULL,
    client_first_name VARCHAR(30) NULL,
    client_second_name VARCHAR(30) NULL,
	client_district VARCHAR(30) NULL,
    client_street VARCHAR(30) NULL,
    client_type VARCHAR(30) NULL,
    desired_phone_type VARCHAR(30) NULL,
    station_id INTEGER NOT NULL,
    availability BOOL DEFAULT FALSE,
    FOREIGN KEY (station_id) REFERENCES stations (station_id),
    FOREIGN KEY (queue_entry_id) REFERENCES queue_entry (queue_entry_id)
);



-- DROP TABLE course_work_db_1.user_list;
CREATE TABLE course_work_db_1.user_list (
	user_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(30) NOT NULL UNIQUE,
    user_password VARCHAR(100) NOT NULL,
    user_role VARCHAR(10) NOT NULL
);
