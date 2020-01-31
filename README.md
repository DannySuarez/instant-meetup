# Instant-Meetup

## Concept
Build a RESTful API for an app allowing uers to sign in and send text messages to an
individual or group of individuals informing them of their location.

## Tech Stack
MonogDB/Mongoose | Express | Twilio API

## Usage
* Clone the repo
* You will need a Twilio API Key
* Create a .env file based on the .env-example file
* Use a tool like Postman to send requests

Sign-UP Route Method: POST

localhost:7890/api/v1/signup

```
Example Post
{
  "username": "name",
  "email": "your email",
  "phone": 19712221234,
  "password": "password",
  "location": 45.523417, -122.680926
}
```

Sign-In Route Method: POST

localhost:7890/api/v1/signin
```
{
  "username": "name",
  "password": "password"
}
```
Send a text. Method: POST

localhost:7890/api/v1/message/send
```
{
  "from": 19715551234,
  "to": 19712221234,
  "body": 'the name of your location'
}
```

Send a text to a group. Method: POST

localhost:7890/api/v1/message/sendall
```
{
  "from": 19715551234
  "to": [ 15032341212, 19712221234 ],
  "body": "The bar",
}
```

## Methodologies
Test Driven Development, Mob Programming

## Creators
Danny Suarez | Vasily Markov | Wes Griffin 

## Notes
This project has not been updated since its inception.
Therefore there is a potential for bugs.  

Original group repo at https://github.com/instant-meetup/instant-meetup