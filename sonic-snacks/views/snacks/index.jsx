const React = reuire('react')
const Def = require('../default')

function index (data) {
    let snacksFormatted = data.snacks.map((snack) => {
        return (
            <div>
                <h1>{snacks.name}</h1>
            </div>
        )
    })
    return (
        <Def>
            <main>
         <h1>Snacks Index<h1>
            {snacksFormatted}
            </main>
        </Def>
        
    )
}




module.exports = index;