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
           CREATE TABLE Customers
          (
            CustomerId INT IDENTITY  PRIMARY KEY,
            FirstName NVARCHAR(100) NOT NULL,
            LastName NVARCHAR(100) NOT NULL,
            Email NVARCHAR(100) NOT NULL
          );
       - You can add more data using the below script just changing the values
          INSERT INTO [Customers]
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
### 2.2
- Azure Function APP
- Create Azure Function App from Azure portal
  - Function App Name: serverless-funcapp-demo
  - Follow the configuration setting as instructed in the demo
  - Add below environment variables
    - DB_SERVER_NAME:<YourDBServerName> 
    - DB_NAME: <YourDBName>
### 2.3
- Grant SQL DB Access to Managed Identity
  - Connect to your SQL DB
  - Run below SQL commands
    - Replace  [YourFunctionAppName] with the name of your Function App

      - CREATE USER [YourFunctionAppName] FROM EXTERNAL PROVIDER;
      - ALTER ROLE db_datareader ADD MEMBER [YourFunctionAppName];
      - ALTER ROLE db_datawriter ADD MEMBER [YourFunctionAppName];
        
### 2.4
- Deploy Azure function to Azure Function App
- Open the project in VS code which you cloned in ( ### Prerequisites, #### 1.4)
- Deploy the function to Azure Function App created in ( ### Steps, ### 2.2 )
- For creating & deploying Azure Function App please watch the video from below link:
  - https://youtu.be/kVO6KkDwKRg
### 2.5
- Create API in API Management
- For creating & deploying Azure API Management API please watch the video from below link:
  - https://youtu.be/XkPXJTbsg2A
 
### 2.6
- Test Azure API Management API in Postman
  - For [POST] method to insert data to DB, pass JSON data in below format:
       {
       "FirstName":"YourFirstName",
       "LastName":"YourLastName",
       "Email":"s123dummy@gmail.com"
      }
  - For [GET] method to retrieve data from DB        
    - Input -> pass query parameter id=<value> e.g. id=1 
    
## Contact
- Name: Arockiadoss Jesudoss
- GitHub: https://github.com/noelaanzi
- Linkedin: www.linkedin.com/in/arockiadoss-4756a4145
- YouTube: https://www.youtube.com/@IT-SkilL-MasteR
- Facebook: https://www.facebook.com/Arockiadoss.sna/
- Instagram : https://www.instagram.com/arockiadoss_sna/?hl=en
