<<<<<<< HEAD
=======
import express from "express";
>>>>>>> update-contact
import Contact from "../models/Contact.js";
import SibApiV3Sdk from "@sendinblue/client";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save contact form data in MongoDB
    await Contact.create({ name, email, message });

    // Send email using Brevo (SendinBlue)
    const client = new SibApiV3Sdk.TransactionalEmailsApi();
    client.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

    await client.sendTransacEmail({
      sender: { email: process.env.EMAIL_USER, name: "Portfolio Contact" },
      to: [{ email: process.env.EMAIL_USER }],
      subject: `New message from ${name}`,
      textContent: `From: ${name} <${email}>\n\n${message}`,
    });

    res.json({ message: "Message received. Thank you!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send message" });
  }
});

<<<<<<< HEAD
export default router;
=======
export default router;

>>>>>>> update-contact
