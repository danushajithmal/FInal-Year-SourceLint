//test.js


//non- vulnerable queries

//parameterized
const nonVulnerableQuery1 = "SELECT * FROM users WHERE username = ? AND password = ?";

//escaped input
const nonVulnerableQuery2 = "SELECT * FROM users WHERE username = 'admin' AND password = 'password123'";

//prepared statement
const nonVulnerableQuery3 = "INSERT INTO users (username, password) VALUES (?, ?)";


//basic injection
const vulnerableQuery1 = "SELECT * FROM users WHERE username = 'admin' AND password = ''; DROP TABLE users;";
const vulnerableQuery5 = "SELECT * FROM users WHERE username = 'admin' OR '1'='1';";

//union based injection
const vulnerableQuery2 = "SELECT username, password FROM users WHERE username = 'admin' UNION SELECT 'hacker', 'password';";

//error based injection
const vulnerableQuery3 = "SELECT * FROM users WHERE id = 1 OR 1=1";

//blind injection
const vulnerableQuery4 = "SELECT * FROM users WHERE id = 1 AND SUBSTRING(password, 1, 1) = 'a'";

// Time Based SQL Injection
const vulnerableQuery9 = "SELECT * FROM users WHERE id = 1 AND IF(ASCII(SUBSTRING(password, 1, 1)) = 97, SLEEP(5), 1)";





const q1 = "SELECT EMP_ID, LAST_NAME FROM EMPLOYEE WHERE CITY = 'Seattle' ORDER BY EMP_ID;"

const q2 = "CREATE OR REPLACE VIEW [ Product List] AS SELECT ProductID, ProductName, Category FROM Products WHERE Discontinued = No;"

const a =  "SELECT * FROM employees WHERE first_name LIKE 'P%'";
