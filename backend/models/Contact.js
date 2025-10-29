import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
})

export default mongoose.model('Contact', schema)
