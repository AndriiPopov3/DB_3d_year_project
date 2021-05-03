use course_work_db_1;

SELECT * FROM subscribers WHERE station_id = 1;
SELECT * FROM subscribers WHERE station_id = 1 AND subscriber_type='exemptionary';
SELECT * FROM subscribers WHERE station_id = 1 AND subscriber_age BETWEEN 20 AND 30;
SELECT * FROM subscribers WHERE station_id = 1 AND subscriber_last_name='Huffa';

SELECT * FROM stations;