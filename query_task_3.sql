use course_work_db_1;

SELECT * FROM subscribers WHERE station_id = 1 AND subscriber_id IN (SELECT subscriber_id FROM subscriber_fees WHERE subscriber_debt != 0 OR subscriber_intercity_debt != 0);
SELECT COUNT(subscriber_id) FROM subscribers WHERE station_id = 1 AND subscriber_id IN (SELECT subscriber_id FROM subscriber_fees WHERE subscriber_debt != 0 OR subscriber_intercity_debt != 0);

SELECT * FROM subscribers WHERE subscriber_id IN (SELECT subscriber_id FROM subscriber_fees WHERE subscriber_debt != 0 OR subscriber_intercity_debt != 0);
SELECT COUNT(subscriber_id) FROM subscribers WHERE subscriber_id IN (SELECT subscriber_id FROM subscriber_fees WHERE subscriber_debt != 0 OR subscriber_intercity_debt != 0);

SELECT * FROM subscribers WHERE subscriber_address_district = 'Lower West Prewun' AND subscriber_id IN (SELECT subscriber_id FROM subscriber_fees WHERE subscriber_debt != 0 OR subscriber_intercity_debt != 0);
SELECT COUNT(subscriber_id) FROM subscribers WHERE subscriber_address_district = 'Lower West Prewun' AND subscriber_id IN (SELECT subscriber_id FROM subscriber_fees WHERE subscriber_debt != 0 OR subscriber_intercity_debt != 0);

SELECT * FROM subscribers WHERE subscriber_id IN (SELECT subscriber_id FROM subscriber_fees WHERE subscriber_debt != 0);
SELECT COUNT(subscriber_id) FROM subscribers WHERE subscriber_id IN (SELECT subscriber_id FROM subscriber_fees WHERE subscriber_debt != 0);

SELECT * FROM subscribers WHERE subscriber_id IN (SELECT subscriber_id FROM subscriber_fees WHERE subscriber_intercity_debt != 0);
SELECT COUNT(subscriber_id) FROM subscribers WHERE subscriber_id IN (SELECT subscriber_id FROM subscriber_fees WHERE subscriber_intercity_debt != 0);

SELECT * FROM subscribers WHERE subscriber_id IN (SELECT subscriber_id FROM subscriber_fees WHERE subscriber_debt BETWEEN 400 AND 1000);
SELECT COUNT(subscriber_id) FROM subscribers WHERE subscriber_id IN (SELECT subscriber_id FROM subscriber_fees WHERE subscriber_debt BETWEEN 400 AND 1000);

SELECT * FROM subscriber_fees;