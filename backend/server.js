import express from 'express'
import connectToMongoose from './db/db.js'
import userRouter from './routes/userRoute.js'
import session from 'express-session'
import passport from 'passport'
import 'dotenv/config'
const app = express()
const port = 2610
connectToMongoose()

app.use(session({
  secret:"iamyadavram",
  saveUninitialized:false,
  resave:false,
  cookie:{
    maxAge: 60000 *60
  }
}))

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
