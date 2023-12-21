import ContactForm from '@/components/ContactForm'
import React from 'react'
import NavBar from '../(home)/components/NavBar'

const page = () => {
  return (
    <div>
        <NavBar white={false} />
        <ContactForm />
    </div>
  )
}

export default page
