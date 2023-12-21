'use client'
'use client'
import React, { useState, FormEvent } from 'react';
import ButtonWhite from './ButtonWhite';

const HubspotForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    const zapierResponse = await submitToZapier(email);
    console.log(zapierResponse);
  }

  // This function now sends data to the Zapier webhook
  const submitToZapier = async (email: string) => {
    const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/17284606/3fgbkvq/';
    
    const response = await fetch(zapierWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const responseBody = await response.json();
    return responseBody;
  }

  return (
    <div style={{ padding: '16px' }}>
        <h3 className='text-xs mb-2 font-syne text-[#979693]'>Sign up for our seasonal newsletter</h3>
      <form onSubmit={handleSubmit} className='flex flex-row gap-4 h-full'>
        <input
          name='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-64 text-black font-normal px-3'
        />
        <ButtonWhite text='SIGN UP' type="submit">Submit</ButtonWhite>
      </form>
    </div>
  );
}

export default HubspotForm;

// import React, { useState, FormEvent } from 'react';
// import ButtonWhite from './ButtonWhite';


// const HubspotForm: React.FC = () => {
//   const [email, setEmail] = useState<string>("");

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!email) return;

//     const hubspotResponse = await submitHubspotForm(email);
//     console.log(hubspotResponse);
//   }

//   const submitHubspotForm = async (email: string) => {
//     const portalId = '43906748'; // Replace with your actual portal ID
//     const formGuid = 'fc00706f-4938-4e4e-b496-bfb9e4d35c43'; // Replace with your actual form GUID

   

//     const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/secure/submit/${portalId}/${formGuid}`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         fields: [
//           {
//             name: 'email',
//             value: email,
//           }
//         ],
//         // Include other necessary fields or context as per the API requirements
//       }),
//     });

//     const responseBody = await response.json();
//     return responseBody;
//   }

//   return (
//     <div style={{ padding: '16px' }}>
//         <h3 className='text-xs mb-2 font-syne text-[#979693]'>Sign up for our seasonal newsletter</h3>
//       <form onSubmit={handleSubmit} className='flex flex-row gap-4 h-full'>
//         <input
//           name='email'
//           type='email'
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className='w-64 text-black font-normal px-3'
//         />
//         <ButtonWhite text='SIGN UP' type="submit">Submit</ButtonWhite>
//       </form>
//     </div>
//   );
// }

// export default HubspotForm











// import React, { useState } from 'react';
// import Button from './Button'; // Import your custom Button component
// import ButtonWhite from './ButtonWhite';

// export const Form = () => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email) return;

//     const hubspotResponse = await submitHubspotForm(email);
//     console.log(hubspotResponse);
//   }

//   const submitHubspotForm = async (email) => {
//     const portalId = 'YOUR_PORTAL_ID'; // Replace with your actual portal ID
//     const formGuid = 'YOUR_FORM_GUID'; // Replace with your actual form GUID

//     const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/secure/submit/${portalId}/${formGuid}`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         fields: [
//           {
//             name: 'email',
//             value: email,
//           }
//         ],
//         // Include other necessary fields or context as per the API requirements
//       }),
//     });

//     const responseBody = await response.json();
//     return responseBody;
//   }

//   return (
//     <div style={{ padding: '16px' }}>
//       <h1>HubSpot Test Form</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           name='email'
//           type='email'
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//         />
//         <ButtonWhite text='SIGN UP' type="submit">Submit</ButtonWhite>
//       </form>
//     </div>
//   );
// }


// import React, {useEffect} from "react";

// const HubspotContactForm = () => {
//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src='https://js.hsforms.net/forms/v2.js';
//         document.body.appendChild(script);

//         script.addEventListener('load', () => {
//             // @TS-ignore
//             if (window.hbspt) {
//                 // @TS-ignore
//                 window.hbspt.forms.create({
//                     portalId: 'YOUR_PORTAL_ID_HERE',
//                     formId: 'YOUR_FORM_ID_HERE',
//                     target: '#hubspotForm'
//                 })
//             }
//         });
//     }, []);

//     return (
//         <div>
//             <div id="hubspotForm"></div>
//         </div>
//     );

// }

// export default HubspotContactForm;