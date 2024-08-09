'use client'
import React from 'react'
import Button from './Button'
import { useFormState } from 'react-dom'
import {getInTouchForm} from '../lib/hubspot'
import ButtonWhite from './ButtonWhite';
import { questrial } from '@/lib/fonts'

const ContactForm = () => {
  const [message, formAction] = useFormState(getInTouchForm, null)

  return (
    <div className={`${questrial.className} flex flex-col justify-center items-center px-6 pb-0 pt-20 sm:pb-0 lg:px-8 lg:py-36`}>
      <form action={formAction}  className="">
        {/* <input type="email" id="email" name="email" placeholder="Email" required 
          className="w-64 text-black font-normal px-3" 
        /> */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstname" className="block text-sm font-semibold leading-6 text-gray-900">
              First name*
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstname"
                id="firstname"
                autoComplete="given-name"
                className="block w-full  border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastname" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name*
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastname"
                id="lastname"
                autoComplete="family-name"
                className="block w-full  border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email*
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full  border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                type="tel"
                name="phone"
                id="phone"
                autoComplete="tel"
                className="block w-full  border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full  border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
              <Button text='Send message' type='submit'/>
        </div>
        {/* <ButtonWhite text='SIGN UP' type="submit">Submit</ButtonWhite> */}
      </form>
      <p className="relative mt-2 w-96 bottom-0 left-0 text-[#979693] font-syne font-normal ">{message}</p>
      {/* {showThankYou && <p className="relative text-[#979693] font-syne font-normal mt-2 bottom-0 left-0">Thank you for signing up!</p>} */}
      {/* <p className="relative bottom-0 text-[#979693] font-syne font-normal mt-2 left-0">Thank you for signing up!</p> */}
    </div>
  );
};


export default ContactForm

