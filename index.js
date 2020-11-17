// require stuff
const express = require('express')
const app = require('express')()
const layouts = require('express-ejs-layouts')

const dinoRouter = require('./controllers/dinoController')
const cryptidRouter = require('./controllers/cryptidController')

// additional setup
app.set('view engine', 'ejs')
app.use(layouts)
app.use(express.urlencoded({extended: false}))

// our routes
app.get('/', (req, res) => {
    res.send('hello I am alive!')
})

app.use('/dinosaurs', dinoRouter)
app.use('/cryptids', cryptidRouter)



// listen
app.listen(1337, () => {
    console.log('server has started!')
})