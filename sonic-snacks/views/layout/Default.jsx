const React = require ('react')

const Default = (html) => {
   return (
    <html>
        <head>
            <title>navBar</title>
        </head>
        <body>
            <nav>
                <ul>
                    <li>
                        <a href='/'>Snacks</a>
                    </li>
                </ul>
            </nav>
        </body>
</html>


   )
}
module.exports = Default;