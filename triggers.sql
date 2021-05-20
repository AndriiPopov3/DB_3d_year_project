use course_work_db_1;

DELIMITER $$
DROP TRIGGER After_Sub_Delete;
CREATE TRIGGER After_Sub_Delete BEFORE DELETE ON subscribers
FOR EACH ROW
BEGIN
DELETE FROM subscriber_fees WHERE subscriber_id = old.subscriber_id;
UPDATE phone_numbers SET number_availability = true WHERE phone_number = old.subscriber_phone LIMIT 1;
END $$

DELIMITER $$
CREATE TRIGGER After_Sub_Insert AFTER INSERT ON subscribers
FOR EACH ROW
BEGIN
UPDATE phone_numbers SET number_availability = false WHERE phone_number = new.subscriber_phone LIMIT 1;
END $$

DELETE FROM subscribers WHERE subscriber_id = 75;

DELIMITER $$
-- DROP TRIGGER After_Station_Delete;
CREATE TRIGGER After_Station_Delete BEFORE DELETE ON stations
FOR EACH ROW
BEGIN
DELETE FROM subscribers WHERE station_id = old.station_id;
DELETE FROM phone_numbers WHERE station_id = old.station_id;
END $$