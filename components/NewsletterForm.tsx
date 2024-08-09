'use client'
import React, { FormEvent, useState } from 'react';
import ButtonWhite from './ButtonWhite';
import {newsletterSignUp} from '../lib/hubspot'
import { useFormState } from 'react-dom';
import { questrial } from '@/lib/fonts';


const NewsletterForm = () => {
  const [message, formAction] = useFormState(newsletterSignUp, null)

  return (
    <div className={`${questrial.className} relative`}>
      <h3 className="text-xs mb-2 font-syne text-[#979693]">Sign up for our seasonal newsletter</h3>
      <form action={formAction}  className="flex flex-row gap-4 h-12 lg:h-full">
        <input type="email" id="email" name="email" placeholder="Email" required 
               className="w-64 text-black font-normal px-3" />
        <ButtonWhite text='SIGN UP' type="submit">Submit</ButtonWhite>
      </form>
      <p className="relative text-[#979693] font-syne font-normal mt-2 bottom-0 left-0">{message}</p>
      {/* {showThankYou && <p className="relative text-[#979693] font-syne font-normal mt-2 bottom-0 left-0">Thank you for signing up!</p>} */}
      {/* <p className="relative bottom-0 text-[#979693] font-syne font-normal mt-2 left-0">Thank you for signing up!</p> */}
    </div>
  );
};

export default NewsletterForm;