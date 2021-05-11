use course_work_db_1;

DROP VIEW subs_subs_fees;
CREATE VIEW subs_subs_fees AS
SELECT s.station_id, s.subscriber_id, subscriber_debt, subscriber_intercity_debt
FROM subscribers s, subscriber_fees sf
WHERE s.subscriber_id = sf.subscriber_id
AND (subscriber_debt != 0
OR subscriber_intercity_debt != 0);

DROP VIEW subs_subs_fees_type;
CREATE VIEW subs_subs_fees_type AS
SELECT ss.station_id, s.station_type, ss.subscriber_id, ss.subscriber_debt, ss.subscriber_intercity_debt
FROM stations s, subs_subs_fees ss
WHERE s.station_id = ss.station_id;

SELECT * FROM subs_subs_fees_type;

-- any type desc
SELECT station_id, COUNT(*) 
FROM subs_subs_fees_type 
GROUP BY station_id 
ORDER BY COUNT(*) DESC;

-- specific type desc
SELECT station_id, COUNT(*) 
FROM subs_subs_fees_type 
WHERE station_type = "municipal"
GROUP BY station_id 
ORDER BY COUNT(*) DESC;

-- any type asc
SELECT station_id, COUNT(*) 
FROM subs_subs_fees_type 
GROUP BY station_id 
ORDER BY COUNT(*) ASC;

-- specific type asc
SELECT station_id, COUNT(*) 
FROM subs_subs_fees_type 
WHERE station_type = "municipal"
GROUP BY station_id 
ORDER BY COUNT(*) ASC;

-- max debt any station
SELECT station_id, SUM(subscriber_debt) + SUM(subscriber_intercity_debt) AS "debt_sum"
FROM subs_subs_fees_type 
GROUP BY station_id 
ORDER BY debt_sum DESC;

-- max debt specific station
SELECT station_id, SUM(subscriber_debt) + SUM(subscriber_intercity_debt) AS "debt_sum"
FROM subs_subs_fees_type 
WHERE station_type = "municipal"
GROUP BY station_id 
ORDER BY debt_sum DESC;

-- min debt any station
SELECT station_id, SUM(subscriber_debt) + SUM(subscriber_intercity_debt) AS "debt_sum"
FROM subs_subs_fees_type 
GROUP BY station_id 
ORDER BY debt_sum ASC;

-- min debt specific station
SELECT station_id, SUM(subscriber_debt) + SUM(subscriber_intercity_debt) AS "debt_sum"
FROM subs_subs_fees_type 
WHERE station_type = "municipal"
GROUP BY station_id 
ORDER BY debt_sum ASC;