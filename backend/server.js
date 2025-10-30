import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import contactRoutes from './routes/contactRoutes.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://souravshaw1974_db_user:souravshaw1974@cluster0.xzeh5gx.mongodb.net/')
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.log('Mongo error', err))

  app.get('/', (req, res) => {
  res.send('Portfolio backend is running ');
});


app.use('/api/contact', contactRoutes)

app.get('/api/projects', (req, res) => {
  res.json([
    { _id: 1, title: "Food Booking App", description: "HTML + CSS + JS + Node + Razorpay", link: "", image: "" },
    { _id: 2, title: "Micro Blog", description: "React + Vite", link: "", image: "" }
  ])
})

app.listen(PORT, ()=> console.log(`Server running on ${PORT}`))
