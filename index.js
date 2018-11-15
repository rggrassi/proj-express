const express = require('express')
const app = express()

const indexRouter = require('./routes/index')
const clientsRouter = require('./routes/clients')

app.use('/', indexRouter)
app.use('/clients', clientsRouter)

const port = 3000
app.listen(port, () => {
    console.log(`Listening on port:${port}` )
})