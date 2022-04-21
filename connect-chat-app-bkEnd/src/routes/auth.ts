import bcrypt from 'bcryptjs'
import express from 'express'
import jwt from 'jsonwebtoken'
import { User } from '../entities/user'
import { isAuthenticated } from '../middleware/auth'
import { AuthRequest } from '../types/auth'

const router = express.Router()

router.post('/signup', async (req, res) => {
  try {
    const { email, password, firstName, lastName, username } = req.body

    const userExists = await User.findOne({ where: [{ email }, { username }] })

    if (userExists) {
      return res.status(400).json({
        message: 'User already exists',
      })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      username,
    })
    await user.save()

    return res.status(200).json({ user })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.post('/login', async (req, res) => {
  const { email, username, password } = req.body
  try {
    const user = await User.findOne({ where: [{ email }, {username}] })
    if (!user) {
      return res
        .status(400)
        .json({ message: 'User with that email or username does not exist' })
    }

    const validPass = await bcrypt.compare(password, user.password)

    if (!validPass) {
      return res.status(400).json({ message: 'Invalid password' })
    }

    const token = jwt.sign({ email: user.email }, process.env.HASHING_KEY, {
      expiresIn: '1d',
    })

    return res.status(200).json({ message: 'Logged in successfully', token })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.get('/me', isAuthenticated, async (req: AuthRequest, res) => {
  try {
    const email = req.email

    const user = await User.findOne({ where: { email } })


    res.json({ user })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.delete('/', async (req, res) => {})

export { router as authRouter }
