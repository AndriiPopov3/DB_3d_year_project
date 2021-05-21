use course_work_db_1;

DELIMITER $$
-- DROP TRIGGER After_Sub_Delete;
CREATE TRIGGER After_Sub_Delete BEFORE DELETE ON subscribers
FOR EACH ROW
BEGIN
UPDATE phone_numbers SET number_availability = true WHERE phone_number = old.subscriber_phone LIMIT 1;
END $$

DELIMITER $$
CREATE TRIGGER After_Sub_Insert AFTER INSERT ON subscribers
FOR EACH ROW
BEGIN
UPDATE phone_numbers SET number_availability = false WHERE phone_number = new.subscriber_phone LIMIT 1;
END $$

-- DELETE FROM subscribers WHERE subscriber_id = 75;