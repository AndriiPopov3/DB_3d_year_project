use course_work_db_1;

-- add station_id or type or both to intercity_log
DROP VIEW departmental_stations_intercity_calls;
CREATE VIEW departmental_stations_intercity_calls AS
SELECT s.station_id, s.station_type, intercity_call_id, intercity_call_date
FROM stations s, intercity_log sf
WHERE s.station_id = sf.station_id
AND station_type = "departmental";

DROP VIEW constituent_stations_intercity_calls;
CREATE VIEW constituent_stations_intercity_calls AS
SELECT s.station_id, s.station_type, intercity_call_id, intercity_call_date
FROM stations s, intercity_log sf
WHERE s.station_id = sf.station_id
AND station_type = "constituent";

SELECT * FROM subscribers;
SELECT * FROM intercity_log;
SELECT * FROM departmental_stations_intercity_calls;
SELECT * FROM constituent_stations_intercity_calls; -- empty rn

SELECT j.station_id, j.call_number FROM (SELECT station_id, COUNT(*) AS "call_number"
FROM departmental_stations_intercity_calls
GROUP BY station_id 
ORDER BY call_number DESC) j WHERE j.call_number < 3;

SELECT j.station_id, j.call_number FROM (SELECT station_id, COUNT(*) AS "call_number"
FROM constituent_stations_intercity_calls
GROUP BY station_id 
ORDER BY call_number DESC) j WHERE j.call_number < 3;

SELECT COUNT(jp.station_id) FROM (SELECT j.station_id, j.call_number FROM (SELECT station_id, COUNT(*) AS "call_number"
FROM departmental_stations_intercity_calls
GROUP BY station_id 
ORDER BY call_number DESC) j WHERE j.call_number < 3) jp;

SELECT COUNT(jp.station_id) FROM (SELECT j.station_id, j.call_number FROM (SELECT station_id, COUNT(*) AS "call_number"
FROM constituent_stations_intercity_calls
GROUP BY station_id 
ORDER BY call_number DESC) j WHERE j.call_number < 3) jp;