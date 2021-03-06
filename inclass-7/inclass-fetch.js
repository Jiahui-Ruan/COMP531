// Inclass Fetch Exercise
// ======================
//
// Navigate to https://webdev-dummy.herokuapp.com/sample
//
// This endpoint returns a list of articles.  Your assignment is to
// write a function countWords that uses fetch() to query the endpoint,
// and return a map from the article id to the number of words in the
// article's text.
//
// Also write two "helper" functions that call this initial function.
//
// If there are any exceptions then fetch() will throw an error.
// Provide a "safe" version of the countWords function that always
// returns a map, which will be empty in the case of errors.
//
// Finally, write a function that returns the article id with the
// most number of words.
//
// Below I have provided you a template, you just need to fill in
// the implementation.
//
// Navigate to mocha-inclass-fetch.html to see if your implementation
// provides the expected results.
//
(function(exports) {

    'use strict'

    function countWords(url) {
        return fetch(url)
                .then(r => r.json())
                .then(json => wordMap(json))
    }

    function wordMap(json){
        var map = {}
        var articles = json.articles
        articles.forEach(function(object){
            map[object._id] = object.text.split(" ").length
        })
        return map
    }

    function countWordsSafe(url) {
        return fetch(url)
                .catch({})
    }

    function getLargest(url) {
        return fetch(url)
                .then(r => r.json())
                .then(json => maxId(json))
    }

    function maxId(json){
        var Id = json.articles[0]._id
        var maxLength = json.articles[0].text.split(" ").length
        var articles = json.articles
        articles.forEach(function(object){
            if(object.text.split(" ").length > maxLength){
                Id = object._id
            }
        })
        return String(Id)
    }

    exports.inclass = {
        author: 'Jiahui Ruan',
        countWords, countWordsSafe, getLargest
    }

})(this);
