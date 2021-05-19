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
('Ryan', 'Tolcharde', 36, 'M', 39674, 'Little Tiormelp', '35 Spohn Park', '+977 323 565 9774', 'standard', 'standard', 3),
('Jase', 'Cockshutt', 63, 'M', 38578, 'Little Tiormelp', '2214 Delaware Street', '+62 172 200 3726', 'parallel', 'exemptionary', 3),
('Marta', 'Storer', 56, 'F', 38578, 'Little Tiormelp', '2214 Delaware Street', '+62 172 200 3726', 'parallel', 'standard', 3),
('Iseabal', 'Boner', 56, 'F', 49674, 'Lower North Yugget', '067 Kropf Street', '+421 759 241 4638', 'standard', 'standard', 4),
('Gillian', 'Pentecost', 32, 'F', 49683, 'Lower North Yugget', '78485 Sachs Road', '+33 731 616 0594', 'standard', 'standard', 4),
('Mendy', 'Woodger', 27, 'M', 49653, 'Lower North Yugget', '793 John Wall Hill', '+86 329 961 0895', 'parallel', 'standard', 4),
('Bord', 'Meatcher', 73, 'M', 49653, 'Lower North Yugget', '793 John Wall Hill', '+86 329 961 0895', 'parallel', 'exemptionary', 4),
('Wait', 'Edscer', 62, 'M', 45465, 'Lower North Yugget', '3959 Anniversary Pass', '+504 384 385 7877', 'standard', 'exemptionary', 4),
('Dita', 'Matuszkiewicz', 42, 'F', 42466, 'Lower North Yugget', '92800 Thierer Alley', '+86 341 249 4733', 'standard', 'standard', 4),
('Cliff', 'Pressland', 62, 'M', 43266, 'Lower North Yugget', '12 Manley Drive', '+7 700 262 1278', 'standard', 'exemptionary', 4),
('Maris', 'Garioch', 25, 'F', 47456, 'Lower North Yugget', '072 Butterfield Lane', '+86 495 390 8510', 'standard', 'standard', 4),
('Roz', 'Auletta', 35, 'F', 57456, 'West Flibrap', '056 Pepper Wood Circle', '+420 820 879 1837', 'standard', 'standard', 5),
('Tedd', 'Verbeek', 45, 'M', 57746, 'West Flibrap', '66944 Bunting Junction', '+86 960 109 4982', 'standard', 'standard', 5),
('Rosanna', 'Duffy', 55, 'F', 57463, 'West Flibrap', '3 West Court', '+86 992 589 7369', 'standard', 'standard', 5),
('Deny', 'Amyes', 65, 'F', 52346, 'West Flibrap', '97885 Browning Avenue', '+351 953 620 5700', 'standard', 'exemptionary', 5),
('Carney', 'Adamkiewicz', 75, 'M', 54646, 'West Flibrap', '478 Shasta Drive', '+55 265 205 8628', 'standard', 'exemptionary', 5),
('Kimbell', 'Andriveau', 62, 'M', 52436, 'West Flibrap', '1 Westridge Place', '+86 799 146 4621', 'dual', 'standard', 5),
('Phaidra', 'Cattlow', 34, 'F', 52436, 'West Flibrap', '1 Westridge Place', '+503 370 288 4782', 'dual', 'standard', 5),
('Gennifer', 'Padillo', 36, 'F', 51236, 'West Flibrap', '804 Westend Avenue', '+86 356 652 8293', 'standard', 'exemptionary', 5),
('Winifield', 'Feldharker', 29, 'M', 61236, 'East Hawailgost Heights', '8754 Veith Lane', '+84 676 682 2802', 'standard', 'standard', 6),
('Yard', 'Snarr', 39, 'M', 61736, 'East Hawailgost Heights', '2 Nancy Street', '+420 688 929 9833', 'standard', 'standard', 6),
('Stavros', 'Pauleau', 49, 'M', 63236, 'East Hawailgost Heights', '09554 Ruskin Avenue', '+62 256 538 8672', 'standard', 'standard', 6),
('Falito', 'Wheeldon', 59, 'M', 65636, 'East Hawailgost Heights', '9781 Dapin Drive', '+374 785 624 0982', 'standard', 'standard', 6),
('Hanna', 'Cauldfield', 69, 'F', 63636, 'East Hawailgost Heights', '512 Saint Paul Alley', '+86 682 373 8055', 'standard', 'exemptionary', 6),
('Charis', 'Wand', 79, 'F', 66456, 'East Hawailgost Heights', '53907 Commercial Park', '+48 655 259 4536', 'standard', 'exemptionary', 6),
('Camel', 'Margach', 52, 'F', 67345, 'East Hawailgost Heights', '666 Merry Park', '+7 348 734 1650', 'standard', 'standard', 6),
('Philippa', 'Glamart', 62, 'F', 77345, 'Scetorviad West', '52 Sauthoff Street', '+7 589 281 9890', 'standard', 'exemptionary', 7),
('Lin', 'Whitmarsh', 45, 'F', 73345, 'Scetorviad West', '8 Arrowood Junction', '+261 589 120 5172', 'standard', 'standard', 7),
('Sheelagh', 'Van den Hof', 59, 'F', 77675, 'Scetorviad West', '1 Springview Drive', '+63 919 577 7722', 'standard', 'exemptionary', 7),
('Danyelle', 'Arnold', 26, 'F', 73455, 'Scetorviad West', '6 Anzinger Center', '+505 254 381 2829', 'standard', 'standard', 7),
('Hanni', 'Balden', 36, 'F', 75464, 'Scetorviad West', '71 Buena Vista Terrace', '+63 540 291 7330', 'standard', 'standard', 7),
('Silas', 'Feedham', 42, 'M', 79445, 'Scetorviad West', '1473 American Crossing', '+86 633 409 5536', 'standard', 'standard', 7),
('Win', 'Doe', 34, 'M', 77666, 'Scetorviad West', '85 Karstens Park', '+960 496 649 5612', 'parallel', 'standard', 7),
('Dina', 'Skaife', 61, 'F', 77666, 'Scetorviad West', '85 Karstens Park', '+960 496 649 5612', 'parallel', 'exemptionary', 7),
('Zonda', 'Emblen', 71, 'F', 86536, 'Tegotload Valley', '03 Crescent Oaks Center', '+47 526 895 2682', 'standard', 'exemptionary', 8),
('Baillie', 'Troop', 34, 'M', 82366, 'Tegotload Valley', '57074 Bay Hill', '+380 700 834 9111', 'dual', 'standard', 8),
('Cassaundra', 'Suthren', 52, 'F', 82366, 'Tegotload Valley', '57074 Bay Hill', '+1 575 435 8346', 'dual', 'standard', 8),
('Maddy', 'Miquelet', 23, 'F', 89346, 'Tegotload Valley', '3 Bluestem Alley', '+220 934 920 6435', 'standard', 'standard', 8),
('Ase', 'Ewence', 61, 'M', 82356, 'Tegotload Valley', '084 Green Terrace', '+30 308 914 2326', 'standard', 'exemptionary', 8),
('Spence', 'Pauluzzi', 25, 'M', 87364, 'Tegotload Valley', '7 Moland Court', '+351 856 264 7494', 'standard', 'standard', 8),
('Cahra', 'Srawley', 35, 'F', 97364, 'Downtown Plolreg', '36 Hazelcrest Junction', '+1 502 124 9025', 'standard', 'standard', 9),
('Charil', 'Singh', 69, 'F', 93734, 'Downtown Plolreg', '09297 Hayes Trail', '+7 866 441 7841', 'standard', 'exemptionary', 9),
('Maurise', 'Riddles', 23, 'M', 94744, 'Downtown Plolreg', '24 Union Alley', '+976 703 842 2333', 'standard', 'standard', 9),
('Slade', 'MacRonald', 38, 'M', 94754, 'Downtown Plolreg', '26 Onsgard Parkway', '+63 200 838 4883', 'standard', 'standard', 9),
('Vlad', 'Pickring', 46, 'M', 91564, 'Downtown Plolreg', '1491 Gateway Hill', '+54 801 818 6938', 'standard', 'standard', 9),
('Berke', 'Frantzeni', 51, 'M', 98324, 'Downtown Plolreg', '70603 Paget Park', '+380 493 145 7204', 'standard', 'standard', 9);

INSERT INTO subscriber_fees (subscriber_id, subscriber_access, subscriber_intercity_access, subscriber_fee, subscriber_debt, subscriber_intercity_debt, debt_time)
	VALUES
(1, true, true, 750, 0, 0, 0),
(2, true, true, 1500, 0, 0, 0),
(3, true, true, 1500, 0, 0, 0),
(4, false, false, 1500, 1000, 0, 10),
(5, true, false, 800, 0, 0, 0),
(6, true, true, 1200, 0, 400, 2),
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
(25, true, false, 800, 0, 0, 0),
(26, true, false, 1000, 200, 0, 1),
(27, true, true, 1500, 0, 0, 0),
(28, true, false, 800, 0, 0, 0),
(29, true, true, 600, 0, 0, 0),
(30, true, false, 500, 0, 0, 0),
(31, true, false, 1500, 0, 2000, 143),
(32, true, false, 500, 0, 0, 0),
(33, true, true, 1500, 0, 0, 0),
(34, true, true, 1500, 0, 0, 0),
(35, false, false, 1000, 200, 0, 5),
(36, true, false, 1000, 0, 0, 0),
(37, true, false, 500, 0, 0, 0),
(38, true, true, 750, 0, 0, 0),
(39, true, false, 900, 0, 0, 0),
(40, true, false, 900, 500, 0, 1),
(41, true, false, 750, 0, 250, 1),
(42, true, false, 1000, 0, 0, 0),
(43, true, true, 1500, 0, 250, 2),
(44, true, true, 1500, 0, 0, 0),
(45, false, false, 1000, 800, 0, 17),
(46, true, false, 500, 0, 0, 0),
(47, true, true, 750, 0, 0, 0),
(48, true, true, 1500, 0, 0, 0),
(49, true, true, 750, 0, 0, 0),
(50, true, true, 1500, 0, 0, 0),
(51, true, false, 500, 0, 0, 0),
(52, true, true, 1500, 0, 500, 0),
(53, true, true, 1500, 0, 0, 0),
(54, true, false, 1000, 0, 0, 0),
(55, true, true, 1200, 0, 400, 20),
(56, true, true, 600, 0, 0, 0),
(57, true, false, 500, 0, 0, 0),
(58, true, true, 1300, 0, 0, 0),
(59, true, true, 1300, 0, 0, 0),
(60, true, false, 1000, 0, 0, 0),
(61, false, false, 500, 1500, 0, 103),
(62, true, true, 1500, 0, 0, 0),
(63, true, true, 1500, 0, 0, 0),
(64, true, false, 500, 0, 0, 0),
(65, true, false, 1000, 0, 0, 0),
(66, false, false, 1000, 2000, 0, 39),
(67, true, false, 1500, 0, 750, 42),
(68, true, true, 1500, 0, 0, 0);
-- standard phone standard fee: 1000 normal access, 1500 intercity
-- parallel phone standard fee: 800 normal access, 1200 intercity
-- dual phone standard fee: 900 normal access, 1300 intercity

INSERT INTO phone_numbers (station_id, phone_number, number_availability)
	VALUES
(1, "+86 513 187 0798", false),
(1, "+1 214 281 2678", false),
(1, "+254 900 669 9391", false),
(1, "+52 776 637 3176", false),
(1, "+86 524 894 9817", false),
(1, "+86 587 807 4351", false),
(1, "+62 593 276 7484", false),
(1, "+86 779 775 6959", false),
(1, "+55 490 567 0689", false),
(1, "+86 926 678 3225", true),
(1, "+380 529 619 4474", true),
(1, "+62 204 609 7213", true),
(1, "+48 200 764 7481", true),
(2, "+62 881 404 1088", false),
(2, "+46 576 664 7446", false),
(2, "+420 915 543 1307", false),
(2, "+30 327 153 3555", false),
(2, "+33 366 988 7601", false),
(2, "+62 938 647 1503", true),
(2, "+976 570 567 7854", true),
(2, "+86 791 648 9420", true),
(3, "+62 538 715 4087", false),
(3, "+63 295 955 8820", false),
(3, "+976 822 682 1631", false),
(3, "+86 859 480 7006", false),
(3, "+86 432 391 4574", false),
(3, "+351 982 434 5748", false),
(3, "+977 323 565 9774", false),
(3, "+62 172 200 3726", false),
(4, "+421 759 241 4638", false),
(4, "+33 731 616 0594", false),
(4, "+86 329 961 0895", false),
(4, "+504 384 385 7877", false),
(4, "+86 341 249 4733", false),
(4, "+7 700 262 1278", false),
(4, "+86 495 390 8510", false),
(4, "+86 501 926 9742", true),
(4, "+95 587 648 9454", true),
(4, "+33 821 606 5606", true),
(5, "+420 820 879 1837", false),
(5, "+86 960 109 4982", false),
(5, "+86 356 652 8293", false),
(5, "+351 953 620 5700", false),
(5, "+55 265 205 8628", false),
(5, "+86 799 146 4621", false),
(5, "+503 370 288 4782", false),
(6, "+84 676 682 2802", false),
(6, "+420 688 929 9833", false),
(6, "+62 256 538 8672", false),
(6, "+374 785 624 0982", false),
(6, "+86 682 373 8055", false),
(6, "+48 655 259 4536", false),
(6, "+7 348 734 1650", false),
(6, "+33 514 694 1004", true),
(6, "+7 660 822 3904", true),
(6, "+27 711 693 2732", true),
(7, "+7 589 281 9890", false),
(7, "+261 589 120 5172", false),
(7, "+63 919 577 7722", false),
(7, "+505 254 381 2829", false),
(7, "+63 540 291 7330", false),
(7, "+86 633 409 5536", false),
(7, "+960 496 649 5612", false),
(7, "+51 636 484 7158", true),
(7, "+1 710 837 4289", true),
(8, "+47 526 895 2682", false),
(8, "+380 700 834 9111", false),
(8, "+1 575 435 8346", false),
(8, "+220 934 920 6435", false),
(8, "+30 308 914 2326", false),
(8, "+351 856 264 7494", false),
(9, "+1 502 124 9025", false),
(9, "+7 866 441 7841", false),
(9, "+976 703 842 2333", false),
(9, "+63 200 838 4883", false),
(9, "+54 801 818 6938", false),
(9, "+380 493 145 7204", false),
(9, "+64 997 945 9589", true),
(9, "+420 922 436 1894", true),
(9, "+86 840 819 5613", true),
(9, "+81 312 961 2666", true);

INSERT INTO public_phones (public_phone_type, station_id, public_phone_address_district, public_phone_address_street)
	VALUES
('public', 1, 'Slealt East', '95 Marcy Street'),
('public', 1, 'Lower West Prewun', '67 Dennis Crossing'),
('public', 1, 'Lower West Prewun', '7 Florence Lane'),
('payphone', 1, 'Cloteermamp Hills', '40 Briar Crest Terrace'),
('public', 2, 'Sprillusk Side', '95 8th Lane'),
('payphone', 2, 'Yorald Row', '23 Loomis Terrace'),
('public', 2, 'Yorald Row', '45 Delladonna Road'),
('public', 3, 'Upper North Shrord', '29 Sauthoff Road'),
('public', 3, 'Upper North Shrord', '2 Del Mar Crossing'),
('public', 3, 'Upper North Shrord', '7 Knutson Parkway'),
('payphone', 3, 'Upper North Shrord', '54 Di Loreto Court'),
('payphone', 3, 'Upper North Shrord', '72 Knutson Parkway'),
('payphone', 4, 'Lower North Yugget', '85 Sachs Road'),
('public', 4, 'Lower North Yugget', '800 Thierer Alley'),
('public', 4, 'Lower North Yugget', '72 Butterfield Lane'),
('public', 5, 'West Flibrap', '56 Pepper Wood Circle'),
('payphone', 5, 'West Flibrap', '78 Shasta Drive'),
('public', 5, 'West Flibrap', '804 Westend Avenue'),
('public', 6, 'East Hawailgost Heights', '54 Ruskin Avenue'),
('public', 6, 'East Hawailgost Heights', '907 Commercial Park'),
('public', 6, 'East Hawailgost Heights', '81 Dapin Drive'),
('payphone', 7, 'Scetorviad West', '2 Sauthoff Street'),
('payphone', 7, 'Scetorviad West', '73 American Crossing'),
('public', 7, 'Scetorviad West', '5 Karstens Park'),
('public', 8, 'Tegotload Valley', '074 Bay Hill'),
('payphone', 8, 'Tegotload Valley', '4 Green Terrace'),
('public', 8, 'Tegotload Valley', '35 Bluestem Alley'),
('public', 9, 'Downtown Plolreg', '91 Gateway Hill'),
('public', 9, 'Downtown Plolreg', '4 Union Alley'),
('public', 9, 'Downtown Plolreg', '6 Onsgard Parkway');

INSERT INTO intercity_log (intercity_call_date, subscriber_id, station_id, intercity_call_destination)
	VALUES
('2020-06-10', 2, 1, 'Kharkiv'),
('2020-06-11', 3, 1, 'Kharkiv'),
('2020-06-12', 8, 1, 'Lviv'),
('2020-06-13', 8, 1, 'Odesa'),
('2020-06-14', 9, 1, 'Ternopil'),
('2020-06-15', 9, 1, 'Ternopil'),
('2020-06-16', 9, 1, 'Odesa'),
('2020-06-17', 14, 2, 'Kharkiv'),
('2020-06-18', 16, 2, 'Lviv'),
('2020-06-19', 16, 2, 'Lviv'),
('2020-06-20', 17, 3, 'Odesa'),
('2020-06-21', 17, 3, 'Ternopil'),
('2020-06-22', 17, 3, 'Odesa'),
('2020-06-23', 17, 3, 'Ternopil'),
('2020-06-24', 21, 3, 'Dnipro'),
('2020-06-25', 47, 6, 'Dnipro'),
('2020-06-26', 47, 6, 'Odesa');

SELECT * FROM user_list;