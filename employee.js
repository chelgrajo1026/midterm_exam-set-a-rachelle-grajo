const fs = require('fs')

const employee = function(oldNote) {
    const newNote = JSON.parse(oldNote)

    const info = newNote.map(function(n) {
        return n.employee;
    })

    console.log("Employee:" + info)
}

module.exports = employee