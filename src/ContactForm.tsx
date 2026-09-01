import React, { useState } from "react"

interface ContactFormData {
  name: string
  email: string
  message: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.placeholder.toLowerCase()]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required!")
      return
    }
    console.log(formData)
  }

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={handleChange} />
        <input type="email" placeholder="Email" onChange={handleChange} />
        <textarea placeholder="Message" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
