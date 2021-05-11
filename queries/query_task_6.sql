use course_work_db_1;

-- DROP PROCEDURE ExemptPercent;
-- delimiter $$
-- CREATE PROCEDURE ExemptPercent (stationId INT, OUT exemPerc FLOAT)
-- BEGIN
-- DECLARE stanNum INT default 0;
-- DECLARE exemptNum INT default 0;
-- SELECT COUNT(subscriber_id) INTO stanNum FROM subscribers WHERE station_id = stationId AND subscriber_type = "standard";
-- SELECT COUNT(subscriber_id) INTO exemptNum FROM subscribers WHERE station_id = stationId AND subscriber_type = "exemptionary";
-- SET exemPerc = (exemptNum / (stanNum + exemptNum))*100;
-- END $$

-- DROP PROCEDURE StanPercent;
-- delimiter $$
-- CREATE PROCEDURE StanPercent (stationId INT, OUT stanPerc FLOAT(10))
-- BEGIN
-- DECLARE stanNum INT default 0;
-- DECLARE exemptNum INT default 0;
-- SELECT COUNT(subscriber_id) INTO stanNum FROM subscribers WHERE station_id = stationId AND subscriber_type = "standard";
-- SELECT COUNT(subscriber_id) INTO exemptNum FROM subscribers WHERE station_id = stationId AND subscriber_type = "exemptionary";
-- SET stanPerc = (stanNum / (stanNum + exemptNum))*100;
-- END $$

-- DROP PROCEDURE ExemptPercentOverall;
-- delimiter $$
-- CREATE PROCEDURE ExemptPercentOverall (OUT exemPerc FLOAT)
-- BEGIN
-- DECLARE stanNum INT default 0;
-- DECLARE exemptNum INT default 0;
-- SELECT COUNT(subscriber_id) INTO stanNum FROM subscribers WHERE subscriber_type = "standard";
-- SELECT COUNT(subscriber_id) INTO exemptNum FROM subscribers WHERE subscriber_type = "exemptionary";
-- SET exemPerc = (exemptNum / (stanNum + exemptNum))*100;
-- END $$

-- DROP PROCEDURE StanPercentOverall;
-- delimiter $$
-- CREATE PROCEDURE StanPercentOverall (OUT stanPerc FLOAT(10))
-- BEGIN
-- DECLARE stanNum INT default 0;
-- DECLARE exemptNum INT default 0;
-- SELECT COUNT(subscriber_id) INTO stanNum FROM subscribers WHERE subscriber_type = "standard";
-- SELECT COUNT(subscriber_id) INTO exemptNum FROM subscribers WHERE subscriber_type = "exemptionary";
-- SET stanPerc = (stanNum / (stanNum + exemptNum))*100;
-- END $$

-- DROP PROCEDURE ExemptPercentDistrict;
-- delimiter $$
-- CREATE PROCEDURE ExemptPercentDistrict (district_name TEXT, OUT exemPerc FLOAT)
-- BEGIN
-- DECLARE stanNum INT default 0;
-- DECLARE exemptNum INT default 0;
-- SELECT COUNT(subscriber_id) INTO stanNum FROM subscribers WHERE subscriber_address_district = district_name AND subscriber_type = "standard";
-- SELECT COUNT(subscriber_id) INTO exemptNum FROM subscribers WHERE subscriber_address_district = district_name AND subscriber_type = "exemptionary";
-- SET exemPerc = (exemptNum / (stanNum + exemptNum))*100;
-- END $$

-- DROP PROCEDURE StanPercentDistrict;
-- delimiter $$
-- CREATE PROCEDURE StanPercentDistrict (district_name TEXT, OUT stanPerc FLOAT(10))
-- BEGIN
-- DECLARE stanNum INT default 0;
-- DECLARE exemptNum INT default 0;
-- SELECT COUNT(subscriber_id) INTO stanNum FROM subscribers WHERE subscriber_address_district = district_name AND subscriber_type = "standard";
-- SELECT COUNT(subscriber_id) INTO exemptNum FROM subscribers WHERE subscriber_address_district = district_name AND subscriber_type = "exemptionary";
-- SET stanPerc = (stanNum / (stanNum + exemptNum))*100;
-- END $$

-- DROP PROCEDURE ExemptPercentStationType;
-- delimiter $$
-- CREATE PROCEDURE ExemptPercentStationType (stationType TEXT, OUT exemPerc FLOAT)
-- BEGIN
-- DECLARE stanNum INT default 0;
-- DECLARE exemptNum INT default 0;
-- SELECT COUNT(j.subscriber_id) INTO stanNum FROM (SELECT subscriber_id, subscriber_type, station_type FROM stations s JOIN subscribers sb ON s.station_id = sb.station_id GROUP BY sb.subscriber_id) j WHERE j.station_type = stationType AND j.subscriber_type = "standard";
-- SELECT COUNT(j.subscriber_id) INTO exemptNum FROM (SELECT subscriber_id, subscriber_type, station_type FROM stations s JOIN subscribers sb ON s.station_id = sb.station_id GROUP BY sb.subscriber_id) j WHERE j.station_type = stationType AND j.subscriber_type = "exemptionary";
-- SET exemPerc = (exemptNum / (stanNum + exemptNum))*100;
-- END $$

-- DROP PROCEDURE StanPercentStationType;
-- delimiter $$
-- CREATE PROCEDURE StanPercentStationType (stationType TEXT, OUT stanPerc FLOAT(10))
-- BEGIN
-- DECLARE stanNum INT default 0;
-- DECLARE exemptNum INT default 0;
-- SELECT COUNT(j.subscriber_id) INTO stanNum FROM (SELECT subscriber_id, subscriber_type, station_type FROM stations s JOIN subscribers sb ON s.station_id = sb.station_id GROUP BY sb.subscriber_id) j WHERE j.station_type = stationType AND j.subscriber_type = "standard";
-- SELECT COUNT(j.subscriber_id) INTO exemptNum FROM (SELECT subscriber_id, subscriber_type, station_type FROM stations s JOIN subscribers sb ON s.station_id = sb.station_id GROUP BY sb.subscriber_id) j WHERE j.station_type = stationType AND j.subscriber_type = "exemptionary";
-- SET stanPerc = (stanNum / (stanNum + exemptNum))*100;
-- END $$

delimiter $$
CALL ExemptPercent(1, @S)$$
SELECT ROUND(@S, 2);
CALL StanPercent(1, @S)$$
SELECT ROUND(@S, 2);

CALL ExemptPercent(9, @S)$$
SELECT ROUND(@S, 2);
CALL StanPercent(9, @S)$$
SELECT ROUND(@S, 2);

CALL ExemptPercentOverall(@M)$$
SELECT ROUND(@M, 2);
CALL StanPercentOverall(@M)$$
SELECT ROUND(@M, 2);

CALL ExemptPercentDistrict('Upper North Shrord', @D)$$
SELECT ROUND(@D, 2);
CALL StanPercentDistrict('Upper North Shrord', @D)$$
SELECT ROUND(@D, 2);

CALL StanPercentStationType('municipal', @T)$$
SELECT ROUND(@T, 2);
CALL ExemptPercentStationType('municipal', @T)$$
SELECT ROUND(@T, 2);

-- SELECT * FROM subscribers;

-- SELECT ROUND(83.33000183105469, 2);


