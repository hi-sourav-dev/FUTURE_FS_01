import React, { useState } from 'react';
import './styles/main.css';
import profilePic from './assets/profile.jpg';
import certificate2 from "./assets/certificate2.jpeg";
import certificate3 from "./assets/certificate3.jpeg";

const projects = [
  ['01', 'Easy PetPuja', 'Online Meal Booking System', 'MongoDB · Express.js · Node.js · HTML · CSS · Razorpay', 'https://github.com/hi-sourav-dev/project_petpujo'],
  ['02', 'Micro Blog Application', 'A full-stack blogging platform built with React and REST APIs.', 'React.js · Vite · Node.js · Express.js · MongoDB', 'https://github.com/hi-sourav-dev/microblog_project'],
  ['03', 'ZestEats', 'Food delivery application with real-time communication and payments.', 'React.js · Vite · Node.js · Express.js · MongoDB · Socket.io · JWT · Razorpay', 'https://github.com/hi-sourav-dev/zesteats_project'],
];

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const submitContact = async (event) => {
    event.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('https://future-fs-01-opxs.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error('Request failed');
      setForm({ name: '', email: '', message: '' });
      setStatus('Message sent successfully.');
    } catch {
      setStatus('Unable to send right now. Please email me directly.');
    }
  };
  return (
    <div className={dark ? 'app dark' : 'app light'}>
      <header className="site-header">
        <a href="#top" className="logo"><span>S</span>ourav</a>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {['About', 'Skills', 'Training', 'Experience', 'Projects', 'Contact'].map(item => <a key={item} href={'#' + item.toLowerCase()} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <a className="social" href="https://github.com/hi-sourav-dev" target="_blank" rel="noreferrer">GitHub</a>
          <a className="social" href="https://www.linkedin.com/in/sourav-shaw-a62264355" target="_blank" rel="noreferrer">LinkedIn</a>
          <button className="round-btn theme-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? '☀' : '☾'}</button>
          <button className="round-btn menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? '×' : '☰'}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-profile"><img src={profilePic} alt="Sourav Shaw profile" /></div><p className="eyebrow">MERN Stack Developer · Full Stack Developer · AWS Cloud Practitioner</p>
          <h1>Building digital<br /><span>experiences</span> that matter.</h1>
          <p className="lead">I’m Sourav Shaw, a BCA (Hons) student passionate about creating efficient, scalable full-stack web solutions—from database design to polished user interfaces.</p>
          <p className="location">India-based · Open to internship and entry-level opportunities</p>
          <div className="actions">
            <a className="primary" href="#projects">View Work <b>↗</b></a>
            <a className="outline accent" href="#contact">Contact Me</a>
            <a className="outline" href="/Sourav-Shaw-Resume.pdf" download>Resume <b>↗</b></a>
          </div>
        </section>

        <section id="about"><p className="eyebrow">.about</p><h2>Who I <span>Am</span></h2><div className="split"><div className="about-copy"><p>I build real-world applications using MongoDB, Express.js, React.js, and Node.js. With hands-on AWS cloud training and a strong foundation in computer applications, I enjoy turning complex problems into simple, thoughtful products.</p><p>I’m focused on writing clean, maintainable code and creating responsive experiences that work smoothly across devices. I continuously improve my problem-solving skills through practical projects, teamwork, and learning modern development practices.</p></div><div className="stat"><strong>9.20</strong><small>CGPA / 10.00</small><small>BCA (Honours), Brainware University</small></div></div></section>

        <section id="skills"><p className="eyebrow">.skills</p><h2>My <span>Toolkit</span></h2><div className="skill-grid">{[['Programming', ['C', 'Python', 'JavaScript']], ['Web & MERN', ['MongoDB', 'Express.js', 'React.js (Vite)', 'Node.js', 'HTML5', 'CSS3', 'REST APIs']], ['Cloud (AWS)', ['EC2', 'S3', 'VPC', 'IAM', 'Lambda', 'RDS', 'CloudWatch', 'CloudTrail', 'ELB', 'Route 53']], ['Databases', ['MySQL', 'MongoDB', 'DBMS']], ['DevOps & Tools', ['AWS CLI', 'Git', 'Linux', 'VS Code', 'Postman']], ['Networking', ['TCP/IP', 'DNS', 'Subnetting', 'Security Groups']], ['UI/UX', ['Responsive Design', 'Component Architecture', 'User Interface Design']]].map(([title, skills]) => <article key={title}><h3>{title}</h3><div className="skill-pills">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div></section>

        <section id="training"><p className="eyebrow">.training & certifications</p><h2>Learning with <span>purpose.</span></h2><div className="training-list"><article><h3>AWS re/Start Program — Cloud Practitioner 2026</h3><p>Jan–May 2026 · Cloud Practitioner Training</p><small>Amazon Web Services</small><p><li>Completed practical cloud training covering core AWS services, cloud concepts, security, and infrastructure fundamentals.</li></p><p><li>Built a strong foundation for designing, deploying, and monitoring scalable cloud solutions using AWS best practices.</li></p></article><article><h3>Data Representation &amp; Visualization</h3><p>Jul–Aug 2024 · Value Added Course</p><small>Brainware University</small></article><article><h3>UI Mastery: User Interface Design &amp; Development</h3><p>28–30 Aug 2025</p><small>Brainware University</small></article></div><div className="certificate-grid">
          {/*<div className="certificate-placeholder">
    Certificate image 1
  </div>*/}

          <div className="certificate-placeholder">
            <img src={certificate2} alt="Data Representation and Visualization Certificate" />
          </div>

          <div className="certificate-placeholder">
            <img src={certificate3} alt="UI Mastery Certificate" />
          </div>
        </div></section>

        <section id="experience"><p className="eyebrow">.experience</p><h2>Growing through <span>real work.</span></h2><div className="experience-list"><article className="experience-item"><div className="experience-top"><div><h3>Full Stack Development Intern</h3><p className="company">Rixi Lab Technologies</p></div><span className="experience-date">Aug 2026–Present</span></div><p className="experience-meta">8-week summer internship · Full Stack Development</p><ul><li>Developed and improved full-stack web features using React, Node.js, Express.js, and MongoDB.</li><li>Worked with frontend components, REST APIs, database operations, and responsive UI implementation.</li><li>Collaborated with the team to debug issues and maintain clean, scalable code.</li></ul><div className="experience-tags"><span>React</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>REST APIs</span></div></article><article className="experience-item"><div className="experience-top"><div><h3>Full Stack Web Development Intern</h3><p className="company">Future Interns</p></div><span className="experience-date">Oct 18–Nov 18, 2025</span></div><p className="experience-meta">Internship · Web Development</p><ul><li>Built and enhanced web application features using modern frontend and backend technologies.</li><li>Practiced API integration, responsive design, and database-driven application development.</li><li>Improved debugging, problem-solving, and project delivery skills through practical tasks.</li></ul><div className="experience-tags"><span>JavaScript</span><span>React</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span></div></article></div></section>

        <section id="projects"><p className="eyebrow">.selected projects</p><h2>Things I’ve <span>built.</span></h2><div className="projects">{projects.map(([number, title, desc, stack, link]) => <article key={title}><small>{number}</small><h3>{title}</h3><p>{desc}</p><span>{stack}</span><a className="project-link" href={link} target="_blank" rel="noreferrer">View on GitHub ↗</a></article>)}</div></section>

        <section id="contact"><p className="eyebrow">.contact</p><h2>Let’s create something <span>meaningful.</span></h2><div className="contact-layout"><form className="contact-form" onSubmit={submitContact}><label>Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label><label>Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label><label>Message<textarea required rows="6" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project..." /></label><button className="primary send-btn" type="submit">Send Message <b>↗</b></button>{status && <p className="form-status">{status}</p>}</form><div className="contact-details"><p className="eyebrow">email</p><a className="email" href="mailto:souravshaw1974@gmail.com">souravshaw1974@gmail.com ↗</a><p className="eyebrow">connect</p><div className="connect-links"><a href="https://github.com/hi-sourav-dev" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/sourav-shaw-a62264355" target="_blank" rel="noreferrer">LinkedIn</a></div></div></div></section>
      </main>
      <footer>© 2026 Sourav Shaw · <a href="https://github.com/hi-sourav-dev" target="_blank" rel="noreferrer">GitHub</a> · <a href="https://www.linkedin.com/in/sourav-shaw-a62264355" target="_blank" rel="noreferrer">LinkedIn</a></footer>
    </div>
  );
}
export default App;
