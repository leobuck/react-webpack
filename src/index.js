'use strict'

// console.log("webpack esta funcionando")

// var sum = require('./app')
// console.log(sum(1, 2))

var React = require('react')
var ReactDOM = require('react-dom')

var Title = require('./app')

ReactDOM.render(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
)