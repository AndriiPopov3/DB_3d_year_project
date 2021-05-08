use course_work_db_1;

-- all subs of specific ats
SELECT * FROM subscribers WHERE station_id = 1;
SELECT COUNT(subscriber_id) FROM subscribers WHERE station_id = 1;

-- exemptionary subs of specific ats
SELECT * FROM subscribers WHERE station_id = 1 AND subscriber_type='exemptionary';
SELECT COUNT(subscriber_id) FROM subscribers WHERE station_id = 1 AND subscriber_type='exemptionary';

-- age category of the specific ats
SELECT * FROM subscribers WHERE station_id = 1 AND subscriber_age BETWEEN 20 AND 30;
SELECT COUNT(subscriber_id) FROM subscribers WHERE station_id = 1 AND subscriber_age BETWEEN 20 AND 30;

-- specific last name subs of the specific ats
SELECT * FROM subscribers WHERE station_id = 1 AND subscriber_last_name='Huffa';
SELECT COUNT(subscriber_id) FROM subscribers WHERE station_id = 1 AND subscriber_last_name='Huffa';

SELECT * FROM stations;