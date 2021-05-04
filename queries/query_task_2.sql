use course_work_db_1;

SELECT * FROM phone_numbers WHERE number_availability != false;
SELECT COUNT(phone_number) FROM phone_numbers WHERE number_availability != false;

SELECT * FROM phone_numbers WHERE number_availability != false AND station_id = 1;
SELECT COUNT(phone_number) FROM phone_numbers WHERE number_availability != false AND station_id = 1;

