# Paired 2.0

## Table of Contents

- [Deployed App](#deployed-app)
- [Local Deployment](#local-deployment)
- [Dev Team](#dev-team)
- [Description](#description)
- [Agile Development](#agile-development)
- [Technologies & Architectures](#technologies--architecture)
- [React & Redux Tutorial](#react-and-redux-tutorial)
- [Testing & Performance](#testing--performance)
- [PostgreSQL Schema](#postgresql-schema)
- [GraphQL Endpoints](#graphql-endpoints)
- [Resource Credits](#resource-credits)

## Deployed App

Vist the deployed Paired 2.0 app at [https://www.paired.tech/](https://www.paired.tech/).

## Local Deployment

See this [Deployment Guide](local_setup_guide.md) for detailed instructions on how to deploy the app in a local environment.

## Dev Team

Paired 2.0's dev team is:
 - Carleigh Crockett ([GitHub](https://github.com/Capleugh), [LinkedIn](https://www.linkedin.com/in/carleighcrockett/))
 - Daniel Frampton ([GitHub](https://github.com/DanielEFrampton), [LinkedIn](https://www.linkedin.com/in/danielframpton/))
 - Matt Simon ([GitHub](https://github.com/msimon42), [LinkedIn](https://www.linkedin.com/in/matt-simon-83aa5380/))
 - Rebecca Robran ([GitHub](https://github.com/rer7891), [LinkedIn](https://www.linkedin.com/in/rebecca-robran/))

The original Paired dev team is:
- Front End Team
  - Hillary Stewart ([GitHub](https://github.com/hillstew))
  - Tiffany Bachmann ([GitHub](https://github.com/trbachmann))
- Back End Team
  - Jeo  D ([GitHub](https://github.com/dForDeveloper))
  - Aaron Roberts ([GitHub](https://github.com/jaaronbr))

## Description

This repo contains the Paired 2.0 Front-end, a React/Redux app. It derives data and logic from a GraphQL API built with Ruby on Rails and PostgreSQL ([paired-be](https://github.com/DanielEFrampton/paired-be)), which communicates with a Flask micro-service that handles SMS text notifications ([paired-sms](https://github.com/msimon42/paired-sms)).

Together, these micro-services facilitate paired programming and peer mentoring between [Turing](http://turing.io) students throughout their seven-month immersive program. Students later in the program can create available booking slots, and students earlier in the program can browse those and book paired sessions.

Paired 2.0 was built by a team of students in Turing's Back-End Engineering program. It adds SMS and email notifications of bookings and a user statistics dashboard to the [original Paired app](http://paired.tech) ([front-end repo](https://github.com/hillstew/paired-fe), [back-end repo](https://github.com/dForDeveloper/paired-api)) which was built by Front-end students in April of 2019. They graciously allowed contributions to the app and were helpful throughout this process. You can view the original project's Readme file [here]('original_README.md').

## Agile Development

Paired 2.0 was developed over the course of 9 days using accelerated agile practices. After [an initial proposal was written](https://gist.github.com/DanielEFrampton/bb6c6ec2cfa0d466642adf0811d85e16) by the project lead, the team collaboratively participated in an "inception" process. After writing [problem and solution statements](https://gist.github.com/DanielEFrampton/fdc8653e042b7f3d7a6feca8767609eb), the team "brain-dumped" all their feature proposals; prioritized which of those features would be part of the "minimum viable product" (MVP); and engaged in a story-grooming process to craft the user stories and tasks necessary to complete that MVP.

Soon thereafter the team had a meeting to establish goals, communication plans, project management conventions, and more. It was agreed upon that the team would use a Kanban system for project management using [Github Projects](https://github.com/DanielEFrampton/paired-be/projects/1), and have daily stand-up meetings and weekly retrospective meetings. The team met with a project manager every three days for check-ins and communicated with her regularly via Slack.

## Technologies & Architecture

![Technology and Architecture Chart](https://user-images.githubusercontent.com/40702808/75644294-10828a00-5bff-11ea-801c-33c0e7b75691.png)

- Hosting: Firebase (FE) and Heroku (BE, SMS)
- Database: PostgreSQL
- Front-end: React & Redux
- Back-end: Ruby on Rails
- SMS Micro-service: Flask & Python
- Testing: Jest (FE), RSpec (BE), and PyTest (SMS)
- GraphQL: Apollo Client (FE) and GraphQL-Ruby (BE)
- OAuth: Github via Firebase
- SMS Notifications: Twilio
- Email Notifications: Sendgrid
- Background Workers: Sidekiq and Redis
- Performance Tracking: Skylight

## React and Redux Tutorial

As a team of back-end engineers, stepping into a JavaScript-heavy tech stack was an incredible and bewildering learning experience. To help share that learning with our fellow students in the back-end program, we wrote this tutorial: [Explain It Like I'm a Back-ender: React and Redux](react_redux_guide.md).

## Testing & Performance

![Skylight performance dashboard](https://user-images.githubusercontent.com/40702808/75517976-d8f5c100-59f7-11ea-8304-c67cba74546d.png)

At date of project completion, the Paired 2.0 back-end service has 98% test coverage and all tests passing. Server performance and load times are monitored using Skylight, and at time of writing responses average 37 ms.

## PostgreSQL Schema

| Users | Data Type | Keys |
| ----------- | ----------- | ----------- |
| Id | ID | Primary Key |
| name | String |  |
| program | String | |
| pronouns | String | |
| mod | Integer | |
| slack | String | |
| email | String | |
| phone_number | String | |
| firebase_id | String | OAuth Token |

| Pairings | Data Type | Keys |
| ----------- | ----------- | ----------- |
| Id | ID | Primary Key |
| pairer_id | Integer | User Foreign Key|
| pairee_id | Integer | User Foreign Key|
| date | String | |
| time | String | |
| notes | String | |

| Skills | Data Type | Keys |
| ----------- | ----------- | ----------- |
| Id | ID | Primary Key |
| name | String | |
| user_id | Integer | User Foreign Key

## GraphQL Endpoints

Our GraphQL endpoints fall into three categories: queries, mutations, and filter queries. For detailed examples of all the endpoints and example responses, see our [GraphQL Endpoints Guide](graphql_endpoints.md) or click the specific query or mutation below to go its section.

To make live queries to the GraphQL endpoint and see live schema information, setup the back-end using the [local deployment instructions](local_setup_guide.md) and access GraphiQL at `http://localhost:3001/graphiql`.

- Queries
  - [getUser](graphql_endpoints.md#get-user)
  - [getUserByFirebaseID](graphql_endpoints.md#get-user-by-firebase-id)
  - [getUserPairings](graphql_endpoints.md#get-user-pairings)
  - [getUser](graphql_endpoints.md#get-user)
  - [getPairings](graphql_endpoints.md#get-pairings)
  - [getPairing](graphql_endpoints.md#get-pairing)
  - [getUserStats](graphql_endpoints.md#get-user-stats)
- Mutations
  - [createUser](graphql_endpoints.md#create-user)
  - [updateUser](graphql_endpoints.md#update-user)
  - [deleteUser](graphql_endpoints.md#delete-user)
  - [createPairings](graphql_endpoints.md#create-pairings)
  - [updatePairings](graphql_endpoints.md#update-pairings)
  - [deletePairing](graphql_endpoints.md#delete-pairing)
  - [deletePairings](graphql_endpoints.md#delete-pairings)
- Filter Queries
  - [getPairing](graphql_endpoints.md#get-pairing)

## Resource Credits

- [Architecture chart created with Lucidchart.com](http://www.lucidchart.com)
- [Technology logos from Worldvectorlogo.com](http://worldvectorlogo.com/)
