import * as actionTypes from "./actionTypes";
import Airtable from "airtable";
import { useState } from "react";
const table = new Airtable({ apiKey: process.env.REACT_APP_airtable_key }).base(
  process.env.REACT_APP_airtable_base
);

export const checkUserData = (userDataSignPage) => (dispatch) => {
  //  console.log(userDataSignPage.nameEmail)
  // return state.products.find(item => item.id === props.id);

  table("users")
    .select({ fields: ["email"] })
    .eachPage((zaw) => {
      zaw.find((t) => {
        if (t.fields.email === userDataSignPage.nameEmail) {
          console.log("Oh no! That name is already taken");
        }
        //  else {
        //   console.log("olmadı");
        // }
      });
    });

  // console.log(zaw[0].fields.password)
  // if (records.fields.password === userDataSignPage) {
  //   console.log("heyyy");
  // } else {
  //   console.log("olmadı");
  // }

  // find([{
  //   "fields":{
  //     "password": "admin"
  //   }
  // }],
  // function (err, record) {
  //   console.log("sonunda", record);
  // }

  // )

  // .find('h2').text()).to.match(/Counter:/)

  // .select({
  //   fields: ["password"],
  // })
  // .find("password", function (err, record) {
  //   console.log("Retrieved", record);
  // });

  // .eachPage((records) => {
  //  console.log(records)
  // })

  //   .find('recMSR3mBffwqU8zH', function(err, record) {
  //     if (err) { console.error(err); return; }
  //     console.log('Retrieved', record.id);
  // });

  // .select({
  //   fields: ["email", "password"],
  // })
  // .eachPage((records) => {
  //  console.log(records)
  // })

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
