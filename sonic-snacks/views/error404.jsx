const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <main>
            <h1>404:You Ran Out of Rings!!</h1>
            <p>Oops! We can't find the page!</p>
            <div>
                <img src = "/images/shrug.png" alt= "Shrug" width = "550px"></img>
            </div>
        </main>
    )
}

module.exports = error404;