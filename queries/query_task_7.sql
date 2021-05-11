use course_work_db_1;

SELECT * FROM subscribers WHERE station_id = 1;
SELECT COUNT(subscriber_id) FROM subscribers WHERE station_id = 1;

SELECT * FROM subscribers;
SELECT COUNT(subscriber_id) FROM subscribers;

SELECT * FROM subscribers WHERE subscriber_address_district = 'Scetorviad West';
SELECT COUNT(subscriber_id) FROM subscribers WHERE subscriber_address_district = 'Scetorviad West';

SELECT * FROM subscribers WHERE station_id IN (SELECT station_id FROM stations WHERE station_type = 'municipal');
SELECT COUNT(subscriber_id) FROM subscribers WHERE station_id IN (SELECT station_id FROM stations WHERE station_type = 'municipal');

SELECT * FROM subscribers WHERE subscriber_phone_type = 'parallel';
SELECT COUNT(subscriber_id) FROM subscribers WHERE subscriber_phone_type = 'parallel';

SELECT * FROM subscribers WHERE subscriber_phone_type = 'parallel' AND subscriber_type = 'exemptionary';
SELECT COUNT(subscriber_id) FROM subscribers WHERE subscriber_phone_type = 'parallel' AND subscriber_type = 'exemptionary';