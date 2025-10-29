import React, {useState} from 'react'
import axios from 'axios'
import { motion } from "framer-motion";


export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState('')

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value})

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const res = await axios.post("https://future-fs-01-opxs.onrender.com/api/contact", formData);


      setStatus(res.data.message || 'Message sent!')
      setForm({name:'', email:'', message:''})
    }catch(err){
      setStatus('Failed to send message')
    }
  }

  return (

  


    <motion.section id="contact"
    initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true,amount: 0.7 }}>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
        <button type="submit">Send</button>
        <p className="status">{status}</p>
      </form>
    </motion.section>
  )
}
