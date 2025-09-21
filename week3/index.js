const http = require("http");
//TODO - Use Employee Module here
const {getEmployees} = require("./Employee");

//TODO - Fix any errors you found working with lab exercise
console.log("Lab 03 -  NodeJs");

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end('<h1>Welcome to Lab Exercise 03</h1>');
            return;
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            const employeeDetails = getEmployees(); //calls the function to retrieve employee list
            res.end(JSON.stringify(employeeDetails)); //Convert to JSON
            return;
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            const names = getEmployees()
                .map(emp => `${emp.firstName} ${emp.lastName}`)
                .sort();
            res.end(JSON.stringify(names));
            return;
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            const totalSalary = getEmployees()
                .reduce((sum, emp) => sum + emp.Salary, 0);
            res.end(JSON.stringify({total_salary: totalSalary}));
            return;
    }
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({error: http.STATUS_CODES[404] }));
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})