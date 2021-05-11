use course_work_db_1;

SELECT * FROM subscribers;
SELECT COUNT(subscriber_id) FROM subscribers;

-- DROP PROCEDURE findPhoneByAddress;
-- delimiter $$
-- CREATE PROCEDURE findPhoneByAddress (addressName TEXT, OUT isPhone BOOL)
-- BEGIN
-- DECLARE numPhones INT default 0;
-- SELECT COUNT(subscriber_id) INTO numPhones FROM subscribers WHERE subscriber_address_street = addressName;
-- IF numPhones != 0 
-- THEN SET isPhone = true;
-- ELSE 
-- SET isPhone = false;
-- END IF;
-- END $$

CALL findPhoneByAddress('86 International Court', @M)$$
SELECT @M;
CALL findPhoneByAddress('86000000000 International Court', @M)$$
SELECT @M;

SELECT COUNT(subscriber_id) FROM subscribers WHERE subscriber_address_street = '86 International Court'; -- 2
SELECT COUNT(subscriber_id) FROM subscribers WHERE subscriber_address_street = '773 Londonderry Plaza'; -- 1
SELECT COUNT(subscriber_id) FROM subscribers WHERE subscriber_address_street = '7730 Londonderry Plaza'; -- 0

SELECT COUNT(j.subscriber_first_name) 
FROM (SELECT s.subscriber_id, s.subscriber_first_name, s.subscriber_address_street, sf.subscriber_intercity_access 
	  FROM subscribers s 
      JOIN subscriber_fees sf ON s.subscriber_id = sf.subscriber_id 
      GROUP BY s.subscriber_id) j 
WHERE j.subscriber_address_street = '97 Florence Lane' AND j.subscriber_intercity_access = true;

SELECT COUNT(j.subscriber_first_name) 
FROM (SELECT s.subscriber_id, s.subscriber_first_name, s.subscriber_address_street, sf.subscriber_intercity_access 
	  FROM subscribers s 
      JOIN subscriber_fees sf ON s.subscriber_id = sf.subscriber_id 
      GROUP BY s.subscriber_id) j 
WHERE j.subscriber_address_street LIKE '%Florence Lane' AND j.subscriber_intercity_access = true;
