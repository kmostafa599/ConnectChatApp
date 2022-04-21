import cors from 'cors'
import dotenv from 'dotenv'
import express, { json, urlencoded } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import AppDataSource from './data-source'
import { authRouter } from './routes/auth'
import { userRouter } from './routes/user'
dotenv.config()

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(helmet())
app.use(json())
app.use(urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.send('server is running')
})

app.use('/user', userRouter)
app.use('/auth', authRouter)

app.listen(process.env.PORT || 4545, async () => {
  await AppDataSource.initialize()
  console.log('connected to DB')
})
