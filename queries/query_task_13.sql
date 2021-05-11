use course_work_db_1;



-- full gts
SELECT j.subscriber_first_name, j.subscriber_last_name, j.station_id 
FROM (SELECT s.subscriber_id, s.subscriber_first_name, s.subscriber_last_name, s.station_id, subscriber_debt, subscriber_intercity_debt, debt_time
	  FROM subscribers s 
	  JOIN subscriber_fees sf ON s.subscriber_id = sf.subscriber_id 
	  GROUP BY s.subscriber_id) j 
WHERE debt_time < 3 AND (j.subscriber_debt != 0 OR j.subscriber_intercity_debt != 0);

SELECT COUNT(j.subscriber_first_name) 
FROM (SELECT s.subscriber_id, s.subscriber_first_name, subscriber_debt, subscriber_intercity_debt, debt_time
	  FROM subscribers s 
      JOIN subscriber_fees sf ON s.subscriber_id = sf.subscriber_id 
      GROUP BY s.subscriber_id) j 
WHERE debt_time < 3 AND (j.subscriber_debt != 0 OR j.subscriber_intercity_debt != 0);



-- specific ats
SELECT j.subscriber_first_name, j.subscriber_last_name, j.station_id 
FROM (SELECT s.subscriber_id, s.subscriber_first_name, s.subscriber_last_name, s.station_id, subscriber_debt, subscriber_intercity_debt, debt_time
	  FROM subscribers s 
      JOIN subscriber_fees sf ON s.subscriber_id = sf.subscriber_id 
      GROUP BY s.subscriber_id) j 
WHERE j.station_id = 1 AND debt_time < 3 AND (j.subscriber_debt != 0 OR j.subscriber_intercity_debt != 0);

SELECT COUNT(j.subscriber_first_name) 
FROM (SELECT s.subscriber_id, s.subscriber_first_name, s.station_id, subscriber_debt, subscriber_intercity_debt, debt_time
	  FROM subscribers s 
      JOIN subscriber_fees sf ON s.subscriber_id = sf.subscriber_id 
      GROUP BY s.subscriber_id) j 
WHERE j.station_id = 1 AND debt_time < 3 AND (j.subscriber_debt != 0 OR j.subscriber_intercity_debt != 0);



-- specific district
SELECT j.subscriber_first_name, j.subscriber_last_name, j.station_id, j.subscriber_address_district 
FROM (SELECT s.subscriber_id, s.subscriber_first_name, s.subscriber_last_name, s.station_id, s.subscriber_address_district, subscriber_debt, subscriber_intercity_debt, debt_time
	  FROM subscribers s 
      JOIN subscriber_fees sf ON s.subscriber_id = sf.subscriber_id 
      GROUP BY s.subscriber_id) j 
WHERE j.subscriber_address_district = 'Lower North Yugget' AND debt_time < 3 AND (j.subscriber_debt != 0 OR j.subscriber_intercity_debt != 0);

SELECT COUNT(j.subscriber_first_name) 
FROM (SELECT s.subscriber_id, s.subscriber_first_name, s.subscriber_last_name, s.station_id, s.subscriber_address_district, subscriber_debt, subscriber_intercity_debt, debt_time
	  FROM subscribers s 
	  JOIN subscriber_fees sf ON s.subscriber_id = sf.subscriber_id 
      GROUP BY s.subscriber_id) j 
WHERE j.subscriber_address_district = 'Lower North Yugget' AND debt_time < 3 AND (j.subscriber_debt != 0 OR j.subscriber_intercity_debt != 0);
