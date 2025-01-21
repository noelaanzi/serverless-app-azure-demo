# serverless-app-azure-demo
Build serverless application in Azure

## Table of Contents
1. [About](#about)
2. [Getting Started](#getting-started)
3. [Contact](#contact)

## About
This project intends to explain about serverless architecture and how to build serverless application Azure.
The below Azure services are used for this project:
  Azure API Management
  Azure Function App (Node.js)
  Azure SQL Database

## Getting Started
### Prerequisites
### 1.0
- Azure Account with alid Subscription
  - Free Account Link: https://azure.microsoft.com/en-in/pricing/purchase-options/azure-account?icid=azurefreeaccount
- Microsoft Enta ID – User
  - Privileges for creating and managing Azure Function App, Azure SQL Database
### 1.1
- Visual Studio Code Installation on Local computer
  - https://code.visualstudio.com/download
  - Install Azure Functions extension in VS code
  - Install Azure Functions Core Tools in VS code
#### 1.2  
- Git Installation
  - Dwonload Link: https://git-scm.com/downloads
#### 1.3
- Postman Installation
  - Dwonload Link: https://www.postman.com/downloads/
#### 1.4
- Clone the repository to local
  - git clone https://github.com/noelaanzi/serverless-app-azure-demo.git

### Steps
### 2.0
- Azure SQL Database
  - Create Azure SQL Database from Azure portal
    - Database Name: <YourDBServerName>   
    - Database Server Name: <YourDBName>
    - For creating Azure SQL Database please watch the video from below link:
      - https://youtu.be/dDis6wenl-k
 #### 2.1 
    - Create table & insert data
           CREATE TABLE Customer
          (
            CustomerId INT IDENTITY  PRIMARY KEY,
            FirstName NVARCHAR(100) NOT NULL,
            LastName NVARCHAR(100) NOT NULL,
            Email NVARCHAR(100) NOT NULL
          );
    - You can add more data using the below script just changing the values
          INSERT INTO [Customer]
          (
            [FirstName]
          , [LastName]
          , [Email]
          )
          VALUES
          (
           'YourFirstName'
           ,'YourLastName'
           ,'asuresqldb123dummy@gmail.com'
         );
    - Query the data
         SELECT * FROM Customer;
         SELECT * FROM Customer WHERE CustomerId = <value>;
         
### 2.2
- Azure Function APP
- Create Azure Function App from Azure portal
  - Function App Name: serverless-funcapp-demo
  - Follow the configuration setting as instructed in the demo
  - Add below environment variables
    - DB_SERVER_NAME: [YourDBServerName] 
    - DB_NAME: [YourDBName]
### 2.3
- Deploy Azure function to Azure Function App
- Open the project in VS code which you cloned in ( ### Prerequisites, #### 1.4)
- Deploy the function to Azure Function App created in ( ### Steps, ### 2.2 )
- For creating & deploying Azure Function App please watch the video from below link:
  - https://youtu.be/kVO6KkDwKRg
### 2.4
- Create API in API Management
- For creating & deploying Azure API Management API please watch the video from below link:
  - https://youtu.be/XkPXJTbsg2A
 
### 2.5
- React App
  - Query and insert customer information through HTTP requests
  - Steps to run React App locally from VS Code
  - After repository is cloned locally open the repository folder in VS code
  - Open Terminal in VS Cpde
  - The [node_modules] folder may be missing which is usually excluded while uploading to GitHub repository
  - 2.5.1. Run below command to install Node modules
    npm install
  - 2.5.2. Run the build command to build the app
    npm run build
  - 2.5.2. Run the commands to serve the files using a local HTTP server
    npm install -g serve
  - 2.5.3. Run the command for serving production build
    serve -s build
 - The above command will produce the below output
 - Copy and enter the local URL [http://localhost:3000] in the browser, which will open the React App
 - input the data in the app and test it.

            ┌─────────────────────────────────────────┐
            │                                         │
            │   Serving!                              │
            │                                         │
            │   - Local:    http://localhost:3000     │
            │   - Network:  http://192.168.3.2:3000   │
            │                                         │
            │   Copied local address to clipboard!    │
            │                                         │
            └─────────────────────────────────────────┘
    
## Contact
- Name: Arockiadoss Jesudoss
- YouTube: https://www.youtube.com/@IT-SkilL-MasteR
- Linkedin: www.linkedin.com/in/arockiadoss-4756a4145
- GitHub: https://github.com/noelaanzi
- Instagram : https://www.instagram.com/arockiadoss_sna/?hl=en
