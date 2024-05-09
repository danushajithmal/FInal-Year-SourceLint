//non- vulnerable queries

//parameterized
const nonVulnerableQuery1 = "SELECT * FROM users WHERE username = ? AND password = ?";

//escaped input
const nonVulnerableQuery2 = "SELECT * FROM users WHERE username= 'admin' AND password = 'password123'";

//prepared statement
const nonVulnerableQuery3 = "INSERT INTO users (username, password) VALUES (?, ?)";

const q1 = "SELECT EMP_ID, LAST_NAME FROM EMPLOYEE WHERE CITY = 'Seattle' ORDER BY EMP_ID;"

const q2 = "CREATE OR REPLACE VIEW [ Product List] AS SELECT ProductID, ProductName, Category FROM Products WHERE Discontinued = No;"

const a =  "SELECT * FROM employees WHERE first_name LIKE 'P%'";

const b = "SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate FROM Orders INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;"

const c = "SELECT * FROM Customers WHERE Country= 'Mexico';"

//vulnerable queries
const unionBasedInjection = "SELECT username, password FROM users WHERE id=1 UNION SELECT credit_card, expiry_date FROM credit_cards;";
const tautologyBasedInjection = "SELECT * FROM users WHERE user_id = 1 OR 1=1;";
const timeBasedInjection = "SELECT * FROM products WHERE id=IF(1=SLEEP(5), id, 'dummy')";
const directInsertInjection = "INSERT INTO users(username, password) VALUES('admin', 'admin123');";
const templateLiteralInjection = `INSERT INTO logs(type, message) VALUES('error', ${errorMessage});`;
const stringConcatenationInjection = `SELECT * FROM users WHERE email= ${userInput};`;
const delayBasedInjection = "WAITFOR DELAY '00:00:05';";
const unionQueryInjection = "UNION SELECT username, data FROM users;";
const destructiveQueryInjection = "DROP TABLE students;";
const logicalOperatorInjection = `SELECT * FROM data WHERE id = 1 AND ${dynamicCondition};`;
const templateInjection = `SELECT * FROM products WHERE price= ${price};`;
const basicInjection = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}';`;
const dynamicSQLGeneration = `SELECT * FROM products WHERE name LIKE '%${searchTerm}%'`;
const insecureStoredProcedure = `CALL authenticateUser(${userId}, ${password});`;
const advancedUnionQueryInjection = `UNION SELECT ${injectedSQL}, data FROM secret_table;`;
const enhancedDirectInsertInjection = `INSERT INTO payments(card_number, card_holder) VALUES(${cardNumber}, ${cardHolderName});`;
const updateInjection = `UPDATE users SET password = ${newPassword} WHERE user_id = ${userId};`;
const deleteInjection = `DELETE FROM logs WHERE entry_id = ${logId};`;
const complexJoinInjection = `SELECT a.name, b.account_balance FROM users a JOIN bank_accounts b ON a.id= b.user_id WHERE b.account_id= ${accountId};`;
const nestedSQLInjection = `SELECT name FROM users WHERE id IN (SELECT user_id FROM sessions WHERE session_token = ${token});`;


const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json());

const connection = mysql.createConnection({
    host: 'example.com',
    user: 'username',
    password: 'password',
    database: 'database'
});

//Basic Injection
//vulnerable
app.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        // Proceed with authentication success logic
        res.send('Logged in successfully');
    });
});

//secure
app.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var sql = 'SELECT * FROM users WHERE username = ? AND password = ?';

    connection.query(sql, [username, password], function (error, results, fields) {
        if (error) throw error;
        // Proceed with authentication success logic
        res.send('Logged in successfully');
    });
});

//Dynamic sql generation
//vulnerable
app.get('/search', (req, res) => {
    var searchQuery = req.query.query;
    var sql = `SELECT * FROM products WHERE name LIKE '%${searchQuery}%'`;

    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});

//secure
app.get('/search', (req, res) => {
    var searchQuery = req.query.query;
    var sql = 'SELECT * FROM products WHERE name LIKE ?';
    var modifiedSearchQuery = '%' + searchQuery + '%';

    connection.query(sql, [modifiedSearchQuery], function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});

//Insecure stored procedures
//Vulnerable
app.get('/user/details', (req, res) => {
    var userId = req.query.id; // User-supplied input
    const sql = `CALL GetUserDetails(${userId})`;

    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.json(results[0]);
    });
});

//secure
app.get('/user/details', (req, res) => {
    var userId = req.query.id;
    var sql = 'CALL GetUserDetails(?)';

    connection.query(sql, [userId], function (error, results, fields) {
        if (error) throw error;
        res.json(results[0]);
    });
});


app.listen(3000, () => console.log('App running on port 3000'));