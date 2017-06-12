# Summarize Me
Program summarizes articles into a few sentences. Inspired by the auto TL;DR bot used for many subreddits

## How does it work
**Using NLTK**
- Remove words with no value from the article (e.g. 'a', 'to', 'am')
- Create frequency table of words
- Assign value to each sentence depending on the words it contains and the frequency table
- Build summary depending on the value of all sentences and the outstanding ones

## Frameworks and Libraries

[Flask](http://flask.pocoo.org/) - Python micro-framework for web development

[Angular](https://angular.io/) - Framework for mobile and web applications

[Skeleton](http://getskeleton.com/) - CSS Boilerplate

[Font Awesome](http://fontawesome.io/) - CSS Toolkit + Icons

[virtualenv](https://virtualenv.pypa.io/en/stable/) - Create isolated Python environments

[nltk](http://www.nltk.org/) - Natural Language Toolkit

## To test

Using npm and json-server:
```
npm install -g json-server
cd client/
json-server --watch db.json
```
the json server should initialize to http://localhost:3000/, then
```
npm start
```
it should redirect you to http://localhost:3001/

______

To use the RESTful api and get accurate results, set up virtualenv and Flask using pip or your preferred library manager...
```
cd server
sudo pip install virtualenv
virtualenv venv
. venv/bin/activate         * for OS X or Linux *
venv\Scripts\activate       * for Windows *
sudo pip install Flask
python restful.py
```
To deactivate the virtualenv, just type...
```
deactivate
```

## For reference:

Check Traversy Media's video: [Angular 2 in 60 Minutes](https://www.youtube.com/watch?v=-zW1zHqsdyc)

Angular's [QuickStart](https://github.com/angular/quickstart)

TL;DR bot made by [SMMRY](http://smmry.com/)
