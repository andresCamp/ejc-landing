import ContactForm from '@/components/ContactForm'
import React from 'react'
import NavBar from '../(home)/components/NavBar'
import PageTitle from '@/components/PageTitle'

const page = () => {
  return (
    <div>
        <NavBar white={false} />

      <PageTitle title='Get in Touch'/>

        <ContactForm />
    </div>
  )
}

export default page
