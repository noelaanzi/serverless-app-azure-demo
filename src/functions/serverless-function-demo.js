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

    headerData = {
        "Content-Type": "application/json" // Send response as JSON content type
    }


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
                    headers: headerData
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
                headers: headerData
            };
        } else if (request.method === "POST") {

            // Assign request payload
            const customer = await request.json();
            const { Name, Email } = customer;

            if (!Name || !Email) {
                const responseData = {
                    message: "Please send Name,Email in JSON data"

                };
                return {
                    status: 400,
                    jsonBody: responseData,
                    headers: headerData
                };
            }

            // Execute INSERT query
            await sqlConnection.request()
                .input("name", sql.NVarChar, Name)
                .input("email", sql.NVarChar, Email)
                .query("INSERT INTO Customers (Name,Email) VALUES (@name, @email);");

            const responseData = {
                message: "1 Row Successfully Inserted"

            };

            return {
                status: 200,
                jsonBody: responseData,
                headers: headerData
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
            headers: headerData
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
