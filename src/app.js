'use strict'

var React = require('react')

// function sum(val1, val2) {
//     return val1 + val2
// }

// module.exports = sum 

var Title = React.createClass({
    render: function() {
        return React.createElement('h1', null, 'Título')
    }
})

module.exports = Title