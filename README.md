# Google App Scraping

### Technologies

Frontend :- Reactjs, Redux, Saga, loadsh, axios
Backend :- Django, Django-Rest-Framework.

### Responsive

Tested upto iphone6

### Deployment :-

      Frontend on Netlify
      Backend  on Heroku

### Setup the Project locally :- <br/>

**_Backend_** :-

1.  Clone the repo
    git clone https://gitlab.com/TejsinghDhaosriya/nletask
2.  Inside the Base Directory(inside the root of project) run pip install so that all dependencies of project get install
    pip install -r requirements.txt
3.  Start the Backend
    python manaage.py runserver
    Note :- Backend is by default served at 8000 if due to some reason it is not able to serve at 8000 ,if it is serve at any other port then change the port number in baseURL.js file which is inside at flight-frontend folder. <br/>
    **_Frontend_**:-
4.  Move to frontend folder
    cd frontend
5.  Installing the dependencies
    yarn install
6.  Starting the frontend
    yarn start
    will serve project at port 3000

#### Pls visit to above link for demo

##Project Video Link :-<br/>
[Assignment 1](https://youtu.be/l1zaEXHpKjc)<br/>
[Assignment 2](https://youtu.be/Y6GGpHNp1gA)

##Project Link :-<br/>
[Frontend-Link to Project!](https://tej-play-store.netlify.app/)<br/>
[Backend-Link to Project!](https://tej-google.herokuapp.com)

##Project Credentials :-<br/>
Login as admin in frontend via
username :- root
password :- root
<br/>
Login as user in frontend via
username :- tej
password :- rootroot
<br/>
we can create a new user via signup , make sure that password should be greater than or equal to 8

## Problem Set 1 : <br/>

**_Write regex_** :-
Solution is project root regular-expression.py

## Problem Set 2 : <br/>

**_Web App_** :-
Assignment 1 and 2
Visit above readme :- video link & project link.

## Problem Set 3 : <br/>

**_A Write and share a small note about your choice of system to schedule periodic tasks (such as downloading a list of ISINs every 24 hours) _** :-

     I will use celery-beat for scheduling periodic tasks (crontab) , celery is more promising and have huge ecosystem if their any bug it will get resolve .
     celery is good with both redis and raabbitmq . as of now their is not huge problem in celery, we can use  celery in production . I already added celery with rabbitmq for daily midnight scraping of google play store categories in this project.

**_ In what circumstances would you use Flask instead of Django and vice versa? _** :-

When we have to develop complex web app with fast development we should go after with django and when we want to built small app we should go after with flask. Django has huge developer community as compared to flask.
# Contact-Book
