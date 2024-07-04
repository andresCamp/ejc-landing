import ContactForm from '@/components/ContactForm'
import React from 'react'
import NavBar from '../(home)/components/NavBar'

const page = () => {
  return (
    <div>
        <NavBar white={false} />
        <div className=" sticky top-0  transform rotate-90 origin-bottom-left ml-2">
          <p className="text-5xl font-questrial">Get in Touch</p>
        </div>
        <ContactForm />
    </div>
  )
}

export default page
