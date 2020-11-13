// import alertify from "alertifyjs";

// import React from "react";

// export default function SignIn() {
//   alertify.genericDialog ||
//     alertify.dialog("genericDialog", function () {
//       return {
//         main: function (content) {
//           this.setContent(content);
//         },
//         setup: function () {
//           return {
//             focus: {
//               element: function () {
//                 return this.elements.body.querySelector(this.get("selector"));
//               },
//               select: true,
//             },
//             options: {
//               basic: true,
//               maximizable: false,
//               resizable: false,
//               padding: false,
//             },
//           };
//         },
//         settings: {
//           selector: undefined,
//         },
//       };
//     });
//   //force focusing password box
//   alertify
//     .genericDialog($("#loginForm")[0])
//     .set("selector", 'input[type="password"]');
//   return (
//     <div>
//       {/* !-- the form to be viewed as dialog--> */}
//       <form id="loginForm">
//         <fieldset>
//           <label> Username </label>
//           <input type="text" value="cakir" />

//           <label> Password </label>
//           <input type="password" value="password" />

//           <input type="submit" value="Login" />
//         </fieldset>
//       </form>
//     </div>
//   );
// }
