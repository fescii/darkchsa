SELECT adm_no, CONCAT(first_name, last_name) AS name
FROM students
WHERE LENGTH(first_name) > 6 AND SUBSTR(last_name, -1) = 'a';