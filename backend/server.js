import express from 'express'
import connectToMongoose from './db/db.js'
import userRouter from './routes/userRoute.js'
import session from 'express-session'
import passport from 'passport'
const app = express()
const port = 2610
connectToMongoose()

app.use(session({
    secret : "any long secret key",
    resave : false,
    saveUninitialized : false
}));
// Initializing Passport
app.use(passport.initialize());
app.use(passport.session());

// Middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/user", userRouter)


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
