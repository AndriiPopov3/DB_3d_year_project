use course_work_db_1;

-- DROP PROCEDURE parallelPhoneReplaceAvail;
-- delimiter $$
-- CREATE PROCEDURE parallelPhoneReplaceAvail (districtName TEXT, OUT numAvail BOOL)
-- BEGIN
-- DECLARE stationId INT default 0;
-- DECLARE freePhoneCount INT default 0;
-- SELECT station_id INTO stationId FROM subscribers WHERE subscriber_phone_type = "parallel" LIMIT 1;
-- SELECT COUNT(phone_number) INTO freePhoneCount FROM phone_numbers WHERE station_id = stationId AND number_availability = true;
-- IF freePhoneCount != 0 
-- THEN SET numAvail = true;
-- ELSE 
-- SET numAvail = false;
-- END IF;
-- END $$