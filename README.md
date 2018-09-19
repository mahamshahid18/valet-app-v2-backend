# Valet Ticketing Application 🚙🅿🎫

You can [**view details about this application here**](https://github.com/mahamshahid18/valet-app-v2). This document only discusses the backend implementation for the application.

## Backend Implementation 👩‍💻
I decided to make the backend as a REST API, implemented using Node.js and Express. The database that I used in the first version was MySQL but I switched to MongoDB in this version due to its flexibility - which was suitable for this case. For the ticket propagation, I decided to use Twilio SMS API.

### App Structure 📂
The backend app has been split into various logically related parts, to practice **separation of concerns**. The express application uses `middleware` for related endpoints. The app contains the following parts/modules:

* **`auth`**: contains an **`AuthController`** which acts as middleware for authentication related endpoints. There is also a **`TokenCheck`** module available which is for validating tokens sent by the client (authorization)
* **`db`**: contains a module which deals with database connection
* **`error`**: contains a module which acts as a generic error handler. It is used as error handling middleware in the whole application
* **`qrcode`**: contains the **`QrCodeController`** which groups together endpoints for generating qrcode for ticket verification
* **`ticket`**: contains a module which groups together the endpoint for generating a valet ticket, as well as the functionality for sending out text messages
* **`user`**: contains a **`User`** file which defines the structure for a user object (to be stored in the db), i.e it defines a schema for usage with mongooge. There is also a `UserController` which acts as middleware for all endpoints related to the user actions
* **`valet`**: contains a **`Valet`** file which defines the structure for a valet object (to be stored in the db), i.e it defines a schema for usage with mongooge. There is also a `ValetController` which acts as middleware for all endpoints related to the valet

### REST API Testing 🌧️
Endpoints exposed in the REST API were tested using [**Postman Client**](https://www.getpostman.com/).

## Backend Deployment ☁️
The backend is deployed on Heroku cloud.