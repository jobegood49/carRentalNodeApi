const express = require('express')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))

//Routes

app.get('/', (req, res, ext) => {
    res.status(200).json({
        message: 'you requested index page'
    })
})


//catch 404 and send to error handler
app.use((req, res, next) => {
    const err = new Error('not found')
    err.status = 404
    next(err)
})


//error handler
app.use((err, req, res, next) => {
    console.log(app.get('env'))
    const error = app.get('env') === 'development' ? err : {}
    const status = err.status || 500
    console.log('yoyoyo',error)

    res.status(status).json({
        error: {
            message: error.message
        }
    })

    //respond to ourselves
    console.log(err)
})

//start server 
const port = app.get('port') || 3000;
app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`)
})
