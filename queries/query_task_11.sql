use course_work_db_1;

DROP VIEW parallel_phone_numbers;
CREATE VIEW parallel_phone_numbers AS
SELECT s.station_id, s.subscriber_id, s.subscriber_phone, s.subscriber_phone_type, phone_number AS "available_phones_for_change", number_availability
FROM subscribers s, phone_numbers pn
WHERE s.station_id = pn.station_id
AND s.subscriber_phone_type = "parallel"
AND number_availability = true;

SELECT * FROM parallel_phone_numbers;