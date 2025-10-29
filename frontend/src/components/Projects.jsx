import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { motion } from "framer-motion";

export default function Projects(){
  const [projects, setProjects] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/api/projects')
      .then(res => setProjects(res.data))
      .catch(()=> {
        // fallback sample projects
        setProjects([
          { _id: 1, title: "Food Booking App", description: "HTML + CSS + JS  + Node + Razorpay", link: "https://github.com/hi-sourav-dev/project_petpujo", image: "" },
          { _id: 2, title: "Micro Blog", description: "React + Vite", link: "https://github.com/hi-sourav-dev/microblog_project", image: "" }
        ])
      })
  },[])

  return (
  
  

    <motion.section id="projects"
    initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true ,amount: 0.7}}>

      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map(p => (
          <article key={p._id} className="card">
            {p.image && <img src={p.image} alt={p.title} />}
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            {p.link && <a href={p.link} target="_blank" rel="noreferrer">View</a>}
          </article>
        ))}
      </div>
    </motion.section>
    

  )
}
