const { app } = require('@azure/functions');
const sql = require("mssql");

async function processRequest(request, context) {

    // Database connection parameters
    const config = {
        user: process.env.USER_NAME,
        password: process.env.DB_PASSWORD,
        server: process.env.DB_SERVER_NAME,
        database: process.env.DB_NAME,

        options: {
            encrypt: true,
            trustServerCertificate: true
        }
    };

    try {

        // Connect to Azure SQL
        const sqlConnection = await sql.connect(config);

        if (request.method === "GET") {
            // Read the query parameter
            const customerId = request.query.get('id');

            // customerId existence and number value check
            if (!customerId || isNaN(customerId)) {
                const responseData = {
                    message: "<id> query parameter Missing"

                };
                return {
                    status: 400,
                    jsonBody: responseData,
                    headers: {
                        "Content-Type": "application/json" // Send response as JSON content type
                    }
                };
            }

            // Execute SELECT query
            const resultSet = await sqlConnection
                .request()
                .input("id", sql.Int, customerId) // Pass the "id" parameter as an integer
                .query("SELECT * FROM Customers WHERE CustomerId = @id");

            const responseData = {
                message: resultSet.recordset
            };

            return {
                status: 200,
                jsonBody: responseData,
                headers: {
                    "Content-Type": "application/json" // Send response as JSON content type
                }
            };
        } else if (request.method === "POST") {

            // Assign request payload
            const customer = await request.json();
            const { FirstName, LastName, Email } = customer;

            if (!FirstName || !LastName || !Email) {
                const responseData = {
                    message: "Please send FirstName,LastName,Email in JSON data"

                };
                return {
                    status: 400,
                    jsonBody: responseData,
                    headers: {
                        "Content-Type": "application/json" // Send response as JSON content type
                    }
                };
            }

            // Execute INSERT query
            await sqlConnection.request()
                .input("firstName", sql.NVarChar, FirstName)
                .input("lastName", sql.NVarChar, LastName)
                .input("email", sql.NVarChar, Email)
                .query("INSERT INTO Customers (FirstName,LastName, Email) VALUES (@firstName,@lastName, @email);");

            const responseData = {
                message: "1 Row Successfully Inserted"

            };

            return {
                status: 200,
                jsonBody: responseData,
                headers: {
                    "Content-Type": "application/json" // Send response as JSON content type
                }
            };

        }

    } catch (error) {
        context.log("Error: ", error);
        const responseData = {
            message: error
        };

        return {
            status: 500,
            jsonBody: responseData,
            headers: {
                "Content-Type": "application/json" // Send response as JSON content type
            }
        };

    } finally {
        sql.close();
    }

};

// Replace [managedid-function-sqldb-demo] with your azure function name
app.http('serverless-function-demo', {
    route: "serverless-function-demo",
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: processRequest
});

module.exports = processRequest
