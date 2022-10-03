# Lab-11

## CAPS

### Author: Alan Chelko

### Problem Domain

    * CAPS Phase 1: Begin the build of an application for a product called CAPS - The Code Academy Parcel Service. In this sprint, we're building out a system that emulates a real world supply chain. 
    * CAPS will simulate a delivery service where vendors (such a flower shops) will ship products using our delivery service and when our drivers deliver them, each vendor will be notified that their customers received what they purchased.
    * This will be an event driven application that “distributes” the responsibility for logging to separate modules, using only events to trigger logging based on activity.

### Testing (pre-written)

    * Middleweare (basic auth, bearer auth)
    * Handlers (getSecret, getUsers, signin, signup)
    * Router test

### Setup

    * PORT: 3001

### Deployed server

    * Heroku: [chelko-basic-api-server-prod](https://dashboard.heroku.com/apps/chelko-bearer-auth-prod/)

### Running the app

    * npm start
    * Endpoint: '/signup'
        * POST signup to create an account with username and password (receive token)
    * Endpoint: '/signin'
        * POST to login with existing username and password (receive token)
    * Endpoint: '/users' (with token)
        * Returns existing users
    * Endpoint: '/secret' (wit token)
        * 'Welcome to the secret area!'
    *  Enpoint: '/*'
        * Returns object with 404 error

### Tests

    * npm test

### UML: Basic Auth Server -- Lab 06 UML

![UML - Lab 04](images/bearer-auth.png)