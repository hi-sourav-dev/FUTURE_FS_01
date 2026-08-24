
import express from "express";

import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

// Reuse one transporter across requests instead of creating a new one every time
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, email, and message are all required." });
  }

  try {
    // Save contact form data in MongoDB
    await Contact.create({ name, email, message });
  } catch (err) {
    console.error("MongoDB save failed:", err);
    // Don't block the email just because the DB save failed
  }

  try {
    // Send email using Gmail via Nodemailer
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    res.json({ message: "Message received. Thank you!" });
  } catch (err) {
    console.error("Email send failed:", err);
    res.status(500).json({ message: "Failed to send message" });
  }
});

export default router;

