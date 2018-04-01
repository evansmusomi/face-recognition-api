# Face Recognition API

A backend NodeJS/Express API for a face recognition app built with ReactJS 🕵️‍

## User Related Endpoints

Each endpoint manipulates or displays information related to Users

* _Register_ : `POST /register` (register new users)
* _Signin_ : `POST /signin` (signin existing users)
* _Profile_ : `GET /profile/:id` (retrieve specified user profile)

## Face Recognition Related Endpoints

Each endpoint manipulates or displays information related to Face Recognition Attempts

* _Image_ : `PUT /image` (update number of face recognition attempts)
* _Imageurl_ : `POST /imageurl` (submit image url for face recognition)

## Technology Stack

* NodeJS/Express
* Postgres
* Clarifai API

## Current Client(s)

* ReactJS Front-End: [Face Recognition App](https://github.com/evansmusomi/face-recognition)
