# Summarize Me
Program summarizes articles into a few sentences. Inspired by the auto TL;DR bot used for many subreddits

# Tools
To develop this program, I used the NLTK (Neuro-linguitic Tool Kit) library in Python

# How does it work
- Remove words with no value from the article (e.g. 'a', 'to', 'am')
- Create frequency table of words
- Assign value to each sentence depending on the words it contains and the frequency table
- Build summary depending on the value of all sentences and the outstanding ones

## Frameworks

[Flask](http://flask.pocoo.org/) - Python micro-framework for web development

[Angular](https://angular.io/) - Framework for mobile and web applications

[Skeleton](http://getskeleton.com/) - CSS Boilerplate

[Font Awesome](http://fontawesome.io/) - CSS Toolkit + Icons

## To test

Using npm:
```
cd client/
npm start
```
it should redirect you to http://localhost:3000/ if it's not currently in use


## For reference:

Check Traversy Media's video: [Angular 2 in 60 Minutes](https://www.youtube.com/watch?v=-zW1zHqsdyc)

Angular's [QuickStart](https://github.com/angular/quickstart)
