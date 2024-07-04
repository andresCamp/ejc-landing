// 'use server'



// export async function newsletterSignUp(email: string) {
//  console.log("newsletterSignUp: ", email)
// }
// // export async function newsletterSignUp(email: string) {
// //   const response = await fetch('/api/newsletter', {
// //     method: 'POST',
// //     body: JSON.stringify({ email }),
// //     headers: {
// //       'Content-Type': 'application/json',
// //     },
// //   })

// //   const data = await response.json()

// //   return data
// // }


// async function submit() {
//     // Hubspot's base API url
//     let base_url = "https://api.hsforms.com/submissions/v3/integration/submit";
    
//     // Our portalId
//     let portal_id = "141483031";
    
//     // Our formId
//     let form_id = "adad861b-d419-4f34-8cee-76d36cccfb5a";
    
//     // Construct the request url
//     let request_url = base_url + "/" + portal_id + "/" + form_id;
    
//     // Selecting the email input element and get its value
//     var email = document.getElementById("email").value;
//     let body = {
//               "submittedAt": (new Date()).getTime(),
//               "fields": [
//                   {
//                       "objectTypeId": "0-1",
//                       "name": "email",
//                       "value": email
//                   }
//               ]
//           }
//           await fetch(request_url, {
//               method: 'POST',
//               mode: 'cors',
//               headers: {
//                   'Accept': 'application/json',
//                   'Content-Type': 'application/json'
//               },
//               body: JSON.stringify(body)
//           }).then(alert("Success!"))
//   }