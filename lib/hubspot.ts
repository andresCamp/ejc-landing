'use server'
import { z } from 'zod'

export async function newsletterSignUp(prevState: any, formData: FormData) {
  // console.log("newsletterSignUp: ", formData)

  // Define a schema for the form data
  const schema = z.object({
    email: z.string().email()
  });

  // Parse FormData and grab individual field data
  const parse = schema.safeParse({
    email: formData.get('email')
  });

  // Error handling
  if (!parse.success) {
      return 'Please enter a valid email address.';
  }

  // Extract email from formData
  const email = parse.data.email;


  // HubSpot API details
  const base_url = "https://api.hsforms.com/submissions/v3/integration/submit";
  const portal_id = "43906748"; // Use your actual portal ID
  const form_id = "fc00706f-4938-4e4e-b496-bfb9e4d35c43"; // Use your actual form ID
  const request_url = `${base_url}/${portal_id}/${form_id}`;

  const body = {
    "submittedAt": Date.now(),
    "fields": [
      {
        "objectTypeId": "0-1",
        "name": "email",
        "value": email
      }
    ]
  };

  try {
    const response = await fetch(request_url, {
      method: 'POST',
      mode: 'cors', // This line might be unnecessary for server-side requests
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (response.ok) {
      // console.log("Successfully submitted to HubSpot");
      // Handle successful submission (e.g., logging, additional server-side logic)
      return "Thank you for signing up!";
    } else {
      // If the server responds with an error, handle it accordingly
      console.error("Failed to submit form to HubSpot");
      return "There was a problem with your sign-up. Please try again.";
    }
  } catch (error) {
    // Catch any network errors and log them
    console.error("Error submitting form to HubSpot:", error);
    return "An error occurred while submitting the form. Please check your connection and try again.";
  }
}


export async function getInTouchForm(prevState: any, formData: FormData) {

  const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );

  // Define a schema for the form data
  const schema = z.object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    firstname: z.string().min(1, { message: "Please enter your first name" }),
    lastname: z.string().min(1, { message: "Please enter your last name" }),
    phone: z.string().optional(),
    message: z.string().optional(),
  });

  // Parse FormData and grab individual field data
  const parse = schema.safeParse({
    email: formData.get('email'),
    firstname: formData.get('firstname'),
    lastname: formData.get('lastname'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  // Error handling
  // if (!parse.success) {
  //     return 'Please enter a valid email address.';
  // }
  if (!parse.success) {
    // Collect error messages
    const errorMessages = parse.error.errors.map((err) => err.message).join('\n');
    return `\n${errorMessages}`;
  }
  

  // Extract email from formData
  const email = parse.data.email;
  const firstname = parse.data.firstname;
  const lastname = parse.data.lastname;
  const phone = parse.data.phone;
  const message = parse.data.message;


  // HubSpot API details
  const base_url = "https://api.hsforms.com/submissions/v3/integration/submit";
  const portal_id = "43906748"; // Use your actual portal ID
  const form_id = "7d818459-de9b-4862-8284-7d61539c96ba"; // Use your actual form ID
  const request_url = `${base_url}/${portal_id}/${form_id}`;

  const body = {
    "submittedAt": Date.now(),
    "fields": [
      {
        "objectTypeId": "0-1",
        "name": "firstname",
        "value": firstname
      },
      {
        "objectTypeId": "0-1",
        "name": "lastname",
        "value": lastname
      },
      {
        "objectTypeId": "0-1",
        "name": "email",
        "value": email
      },
      {
        "objectTypeId": "0-1",
        "name": "phone",
        "value": phone
      },
      {
        "objectTypeId": "0-1",
        "name": "message",
        "value": message
      }
    ]
  };

  try {
    const response = await fetch(request_url, {
      method: 'POST',
      mode: 'cors', // This line might be unnecessary for server-side requests
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (response.ok) {
      // console.log("Successfully submitted to HubSpot");
      // Handle successful submission (e.g., logging, additional server-side logic)
      return "We will get back to you soon!";
    } else {
      // If the server responds with an error, handle it accordingly
      console.error("Failed to submit form to HubSpot");
      return "There was a problem sending your message. Please try again.";
    }
  } catch (error) {
    // Catch any network errors and log them
    console.error("Error submitting form to HubSpot:", error);
    return "An error occurred while submitting the form. Please check your connection and try again.";
  }
}






// export async function newsletterSignUp(prevState: any, formData: FormData) {
//  console.log("newsletterSignUp: ", formData)
//  return "Thank you for signing up!"
// }








// export async function newsletterSignUp(prevState: any, formData: FormData) {
//   console.log("newsletterSignUp: ", formData);

//   // Assuming formData.get('email') retrieves the email address submitted by the user
//   const email = formData.get('email');

//   if (email) {
//     try {
//       // Call the HubSpot form submission function with the email
//       const submitResponse = await submitHubspotForm(email);

//       console.log('HubSpot submission response: ', submitResponse);

//       // You can perform additional checks on submitResponse here if needed
//       // For simplicity, we're just returning a success message
//       return "Thank you for signing up!";
//     } catch (error) {
//       console.error('Error submitting to HubSpot: ', error);
//       // Handle the error appropriately in your application context
//       return "There was a problem with your sign-up. Please try again.";
//     }
//   } else {
//     // Handle the case where the email is not provided or invalid
//     return "Please provide a valid email address.";
//   }
// }

// async function submitHubspotForm(email: any) {
//   const portalId = '43906748'; // Replace with your actual portal ID
//   const formGuid = 'fc00706f-4938-4e4e-b496-bfb9e4d35c43'; // Replace with your actual form GUID

//   const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/secure/submit/${portalId}/${formGuid}`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       fields: [
//         {
//           name: 'email',
//           value: email,
//         }
//       ],
//       // Include other necessary fields or context as per the API requirements
//     }),
//   });

//   if (!response.ok) {
//     // If the response status is not 2xx, throw an error
//     throw new Error('Failed to submit form to HubSpot');
//   }

//   const responseBody = await response.json();
//   return responseBody;
// }





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


// const hubspot = require('@hubspot/api-client');

// const hubspotClient = new hubspot.Client({"accessToken":"YOUR_ACCESS_TOKEN"});

// const PublicUpdateSubscriptionStatusRequest = { emailAddress: "string", legalBasis: "LEGITIMATE_INTEREST_PQL", subscriptionId: "string", legalBasisExplanation: "string" };

// try {
//   const apiResponse = await hubspotClient.communicationPreferences.statusApi.post-/communicationPreferences/v3/subscribe(PublicUpdateSubscriptionStatusRequest);
//   console.log(JSON.stringify(apiResponse, null, 2));
// } catch (e) {
//   e.message === 'HTTP request failed'
//     ? console.error(JSON.stringify(e.response, null, 2))
//     : console.error(e)
// }

