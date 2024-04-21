//test.js


//non- vulnerable queries

//parameterized
const nonVulnerableQuery1 = "SELECT * FROM users WHERE username = ? AND password = ?";

//escaped input
const nonVulnerableQuery2 = "SELECT * FROM users WHERE username = 'admin' AND password = 'password123'";

//prepared statement
const nonVulnerableQuery3 = "INSERT INTO users (username, password) VALUES (?, ?)";

const q1 = "SELECT EMP_ID, LAST_NAME FROM EMPLOYEE WHERE CITY = 'Seattle' ORDER BY EMP_ID;"

const q2 = "CREATE OR REPLACE VIEW [ Product List] AS SELECT ProductID, ProductName, Category FROM Products WHERE Discontinued = No;"

const a =  "SELECT * FROM employees WHERE first_name LIKE 'P%'";

const b = "SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate FROM Orders INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;"

const c = "SELECT * FROM Customers WHERE Country = 'Mexico';"

//vulnerable queries


const va = "SELECT * FROM users WHERE username = 'admin' AND password = ''; DROP TABLE users;";

const vb = "SELECT * FROM users WHERE username = 'admin' OR '1'='1';";


const vc = "SELECT username, password FROM users WHERE username = 'admin' UNION SELECT 'hacker', 'password';";


const vd = "SELECT * FROM users WHERE id = 1 OR 1=1";


const vf = `SELECT * FROM Customers INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID WHERE Customers.CustomerID = 1 OR 1=1;`

const vh = `INSERT INTO users (username, password) VALUES ('${username}', '${password}');`

const uname1 = '1=1';
const vg = `SELECT FROM workers WHERE username = 'admin' OR '${uname1}';`

const vi = `SELECT * FROM users WHERE username= ${username} AND password = ${password};`

const vj = `SELECT * FROM products WHERE category= ${category} AND price BETWEEN ${min_price} AND ${max_price}`;

