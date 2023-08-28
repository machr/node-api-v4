import express from 'express'
import router from './router'
import morgan from 'morgan' // Monitoring library
import cors from 'cors';

const app = express()

// Add middleware before anything else
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
/*
    will get ?a=1,thing=someotherthing from google.com?a=1,thing=someotherthing
    and put it into a object we can access like 'query.a', 'query.thing'
*/

app.get('/', (req, res) => {
    res.json({ message: "hello" })
})

app.use('/api', router)

export default app;