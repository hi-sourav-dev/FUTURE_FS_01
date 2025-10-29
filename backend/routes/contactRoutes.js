import express from 'express'
import nodemailer from 'nodemailer'
import Contact from '../models/Contact.js'

const router = express.Router()

router.post('/', async (req, res) => {
  const { name, email, message } = req.body
  try{
    await Contact.create({ name, email, message })
    // send email (requires env configured)
    if(process.env.EMAIL_USER && process.env.EMAIL_PASS){
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
      })
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`
      })
    }
    res.json({ message: 'Message received. Thank you!' })
  }catch(err){
    console.error(err)
    res.status(500).json({ message: 'Failed to send message' })
  }
})

export default router
