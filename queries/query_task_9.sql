use course_work_db_1;

SELECT intercity_call_destination, COUNT(*) FROM intercity_log GROUP BY intercity_call_destination ORDER BY COUNT(*) DESC;