use course_work_db_1;

INSERT INTO stations (station_type)
	VALUES
('municipal'),
('municipal'),
('municipal'),
('departmental'),
('departmental'),
('departmental'),
('constituent'),
('constituent'),
('constituent');

INSERT INTO subscribers (subscriber_first_name, subscriber_last_name, subscriber_age, subscriber_gender, subscriber_address_index, subscriber_address_district, subscriber_address_street, subscriber_phone, subscriber_phone_type, subscriber_type, station_id)
	VALUES
('Melvin', 'Tucker', 60, 'M', 10234, 'Slealt East', '9501 Marcy Street', '+86 513 187 0798', 'standard','exemptionary', 1),
('Prudy', 'Huffa', 25, 'F', 10276, 'Lower West Prewun', '33367 Dennis Crossing', '+1 214 281 2678', 'standard', 'standard', 1),
('Ilene', 'Wanstall', 24, 'F', 10278, 'Lower West Prewun', '97 Florence Lane', '+254 900 669 9391', 'standard', 'standard', 1),
('Robbie', 'Absolem', 24, 'M', 13576, 'Cloteermamp Hills', '740 Briar Crest Terrace', '+52 776 637 3176', 'standard', 'standard', 1),
('Arni', 'Joynt', 35, 'M', 11543, 'Scriggug Center', '86 International Court', '+86 524 894 9817', 'parallel', 'standard', 1),
('Murvyn', 'Husk', 34, 'M', 11543, 'Scriggug Center', '86 International Court', '+86 524 894 9817', 'parallel', 'standard', 1),
('Mylo', 'Franke', 29, 'M', 11276, 'Lower West Prewun', '773 Londonderry Plaza', '+86 587 807 4351', 'standard', 'exemptionary', 1),
('Cosimo', 'Spores', 34, 'M', 18276, 'Gab Park', '108 Thierer Avenue', '+62 593 276 7484', 'standard', 'standard', 1),
('Magda', 'Baskerfield', 64, 'F', 10646, 'Lower West Prewun', '1071 Pond Hill', '+86 779 775 6959', 'dual', 'exemptionary', 1),
('Florenza', 'Severns', 69, 'F', 10646, 'Lower West Prewun', '1071 Pond Hill', '+55 490 567 0689', 'dual', 'exemptionary', 1),
('Gaultiero', 'Jozefiak', 39, 'M', 20646, 'Sprillusk Side', '84495 8th Lane', '+62 881 404 1088', 'standard', 'standard', 2),
('Gwennie', 'Gorham', 25, 'F', 20758, 'Sprillusk Side', '67571 Oriole Hill', '+46 576 664 7446', 'dual', 'standard', 2),
('Jilleen', 'Staziker', 25, 'F', 20758, 'Sprillusk Side', '67571 Oriole Hill', '+420 915 543 1307', 'dual', 'standard', 2),
('Ardene', 'Santhouse', 59, 'F', 23746, 'Yorald Row', '90 Loomis Terrace', '+30 327 153 3555', 'parallel', 'exemptionary', 2),
('Bradford', 'Jewel', 31, 'M', 23906, 'Yorald Row', '90 Loomis Terrace', '+30 327 153 3555', 'parallel', 'standard', 2),
('Tamas', 'Lomen', 43, 'M', 26646, 'Yorald Row', '95 Delladonna Road', '+33 366 988 7601', 'standard', 'standard', 2),
('Stanleigh', 'Giraldo', 23, 'M', 36646, 'Upper North Shrord', '5 Di Loreto Court', '+62 538 715 4087', 'standard', 'standard', 3),
('Adora', 'Wolfendell', 33, 'F', 36656, 'Upper North Shrord', '83129 Sauthoff Road', '+63 295 955 8820', 'dual', 'exemptionary', 3),
('Daffi', 'Cowill', 32, 'F', 36656, 'Upper North Shrord', '83129 Sauthoff Road', '+976 822 682 1631', 'dual', 'standard', 3),
('Leda', 'Craw', 45, 'F', 31646, 'Upper North Shrord', '0 Del Mar Crossing', '+86 859 480 7006', 'standard', 'exemptionary', 3),
('Stacia', 'Rowan', 28, 'F', 32646, 'Upper North Shrord', '277 Knutson Parkway', '+86 432 391 4574', 'standard', 'standard', 3),
('Carmine', 'Lewin', 24, 'M', 37844, 'Little Tiormelp', '732 Quincy Plaza', '+351 982 434 5748', 'standard', 'standard', 3),
('Ryan', 'Tolcharde', 36, 'M', 39674, 'Little Tiormelp', '35 Spohn Park', '+62 172 200 3726', 'standard', 'standard', 3),
('Jase', 'Cockshutt', 63, 'M', 38578, 'Little Tiormelp', '2214 Delaware Street', '+62 172 200 3726', 'parallel', 'exemptionary', 3),
('Marta', 'Storer', 56, 'F', 38578, 'Little Tiormelp', '2214 Delaware Street', '+62 172 200 3726', 'parallel', 'standard', 3);

INSERT INTO subscriber_fees (subscriber_id, subscriber_access, subscriber_intercity_access, subscriber_fee, subscriber_debt, subscriber_intercity_debt, debt_time)
	VALUES
(1, true, true, 750, 0, 0, 0),
(2, true, true, 1500, 0, 0, 0),
(3, true, true, 1500, 0, 0, 0),
(4, false, false, 1500, 1000, 0, 10),
(5, true, false, 800, 0, 0, 0),
(6, true, false, 1200, 0, 400, 2),
(7, true, false, 500, 0, 0, 0),
(8, true, true, 1500, 0, 0, 0),
(9, true, true, 650, 0, 0, 0),
(10, false, false, 650, 1300, 0, 60),
(11, true, false, 1000, 0, 0, 0),
(12, true, false, 1300, 0, 800, 60),
(13, true, false, 900, 0, 0, 0),
(14, true, true, 600, 0, 0, 0),
(15, false, false, 800, 800, 0, 15),
(16, true, true, 1500, 0, 0, 0),
(17, true, true, 1500, 0, 0, 0),
(18, true, true, 650, 0, 0, 0),
(19, true, false, 900, 0, 0, 0),
(20, true, true, 750, 0, 250, 1),
(21, true, true, 1500, 0, 0, 0),
(22, true, false, 1000, 0, 0, 0),
(23, true, false, 1500, 0, 1000, 75),
(24, true, true, 600, 0, 0, 0),
(25, true, false, 800, 0, 0, 0);
-- standard phone standard fee: 1000 normal access, 1500 intercity
-- parallel phone standard fee: 800 normal access, 1200 intercity
-- dual phone standard fee: 900 normal access, 1300 intercity