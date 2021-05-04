use course_work_db_1;

SELECT * FROM subscribers WHERE subscriber_phone = '+86 524 894 9817';
SELECT * FROM subscriber_fees WHERE subscriber_id IN (SELECT subscriber_id FROM subscribers WHERE subscriber_phone = '+86 524 894 9817');