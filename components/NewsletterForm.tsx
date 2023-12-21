
'use client'
import React, { FormEvent, useState } from 'react';
import ButtonWhite from './ButtonWhite';

const NewsletterForm = () => {
  const [showThankYou, setShowThankYou] = useState(false);

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setShowThankYou(true);
//     // Add your form submission logic here.
//   };

const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // event.preventDefault();
    setShowThankYou(true);

  };

  return (
    <div className="relative font-questrial">
      <h3 className="text-xs mb-2 font-syne text-[#979693]">Sign up for our seasonal newsletter</h3>
      <form action="https://submit-form.com/6SIqjMcRG" onSubmit={handleSubmit} className="flex flex-row gap-4 h-full">
      <input type="hidden" name="_append" value="false" />
        <input
            type="hidden"
            name="_feedback.success.title"
            value="Welcome to [Studio Name]. Your seasonal updates on architecture and design begin now."
        />
        <input type="email" id="email" name="email" placeholder="Email" required 
               className="w-64 text-black font-normal px-3" />
        <ButtonWhite text='SIGN UP' type="submit">Submit</ButtonWhite>
      </form>
      {showThankYou && <p className="relative text-[#979693] font-syne font-normal mt-2 bottom-0 left-0">Thank you for signing up!</p>}
      {/* <p className="relative bottom-0 text-[#979693] font-syne font-normal mt-2 left-0">Thank you for signing up!</p> */}
    </div>
  );
};

export default NewsletterForm;


// const NewsletterForm = () => {
//   return (
//     <div>
//             <h3 className='text-xs mb-2 font-syne text-[#979693]'>Sign up for our seasonal newsletter</h3>
//         <form action="https://submit-form.com/6SIqjMcRG" className='flex flex-row gap-4 h-full'>
//         {/* <label htmlFor="name">Name</label>
//         <input type="text" id="name" name="name" placeholder="Name" required />
//         <label htmlFor="email">Email</label> */}
//         <input type="email" id="email" name="email" placeholder="Email" required className='w-64 text-black font-normal px-3'/>
//         <ButtonWhite text='SIGN UP' type="submit">Submit</ButtonWhite>
//         </form>
//     </div>
//   )
// }

// export default NewsletterForm