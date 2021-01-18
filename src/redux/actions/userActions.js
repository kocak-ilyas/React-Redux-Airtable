import * as actionTypes from "./actionTypes";
import Airtable from "airtable";
const table = new Airtable({ apiKey: process.env.REACT_APP_airtable_key }).base(
  process.env.REACT_APP_airtable_base
);

export const checkUserData = (userDataSignPage) => (dispatch) => {
 console.log("userAction",userDataSignPage)
  
  table("users")
  .select({
    fields: ["email", "password"],
  })
  .eachPage((records) => {
   console.log(records)
  })


    // .find("admin", function (err, record) {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    //   console.log("Retrieved", record);
    // })
};

// table("advertisement")
//     .select({
//       fields: ["image", "url"],
//       sort: [{ field: "url", direction: "asc" }],
//     })
//     .eachPage((records) => {
//       dispatch({ type: actionTypes.GET_ADVERTISEMENTS, payload: records });
//     })
    // .catch((error) => {
    //   // console.log("there is a error");
    //   throw error;
    // });
