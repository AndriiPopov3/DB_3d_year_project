use course_work_db_1;

-- DROP PROCEDURE districtAvail;
-- delimiter $$
--  CREATE PROCEDURE districtAvail (districtName TEXT, OUT numAvail BOOL)
--  BEGIN
--  DECLARE stationId INT default 0;
--  DECLARE freePhoneCount INT default 0;
--  SELECT station_id INTO stationId FROM subscribers WHERE subscriber_address_district = districtName LIMIT 1;
--  SELECT COUNT(phone_number) INTO freePhoneCount FROM phone_numbers WHERE station_id = stationId AND number_availability = true;
--  IF freePhoneCount != 0 
--  THEN SET numAvail = true;
--  ELSE 
--  SET numAvail = false;
--  END IF;
--  END $$

SELECT * FROM phone_numbers WHERE number_availability != false;
SELECT COUNT(phone_number) FROM phone_numbers WHERE number_availability != false;

SELECT * FROM phone_numbers WHERE number_availability != false AND station_id = 1;
SELECT COUNT(phone_number) FROM phone_numbers WHERE number_availability != false AND station_id = 1;

CALL districtAvail('Slealt East', @M)$$
SELECT @M;
CALL districtAvail('Little Tiormelp', @M)$$
SELECT @M;
