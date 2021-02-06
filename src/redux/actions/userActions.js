import * as actionTypes from "./actionTypes";
import Airtable from "airtable";
const table = new Airtable({ apiKey: process.env.REACT_APP_airtable_key }).base(
  process.env.REACT_APP_airtable_base
);

export const checkMail = (checkMailData) => (dispatch) => {
  table("users")
    .select({ fields: ["email"] })
    .eachPage((mails) => {
      mails.find((t) => {
        t.fields.email === checkMailData.nameEmail
          ? dispatch({
              type: actionTypes.CHECK_MAIL_AVAİLABLE,
              payload: "Oh no! That name is already taken",
            })
          : null;
      });
    });
    console.log(checkMailData.value)
};

export const checkUserData = (checkData) => (dispatch) => {
  console.log(checkData)
  
  // table("users")
  //   .select({ fields: ["email", "password"] })
  //   .eachPage((mails) => {
  //     mails.find((t) => {
  //       t.fields.email === checkData.nameEmail
  //         ? console.log("Oh no! That name is already taken")
  //         : null;
  //     });
  //   });
};
