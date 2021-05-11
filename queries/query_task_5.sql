use course_work_db_1;

SELECT * FROM public_phones;
SELECT COUNT(public_phone_id) FROM public_phones;

SELECT * FROM public_phones WHERE station_id = 1;
SELECT COUNT(public_phone_id) FROM public_phones WHERE station_id = 1;

SELECT * FROM public_phones WHERE public_phone_address_district = 'Lower West Prewun';
SELECT COUNT(public_phone_id) FROM public_phones WHERE public_phone_address_district = 'Lower West Prewun';