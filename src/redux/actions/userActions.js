import * as actionTypes from "./actionTypes";
import Airtable from "airtable";
const table = new Airtable({ apiKey: process.env.REACT_APP_airtable_key }).base(
  process.env.REACT_APP_airtable_base
);

export const checkMail = (inputMailData) => (dispatch) => {
  table("users")
    .select({ fields: ["email"] })
    .eachPage((mails) => {
      mails.find((t) => {
        t.fields.email === inputMailData 
        ? dispatch({
          type: actionTypes.CHECK_MAIL_AVAİLABLE_FALSE,
          payload: "Oh no! That name is already taken",
        })
      : null
      // dispatch({
      //   type: actionTypes.CHECK_MAIL_AVAİLABLE_TRUE,
      //   payload: "Yes, this email can be use :)",
      // });
      });
    }); 
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

/*
export const checkMail = (inputMailData) => (dispatch) => {
  var resultOfMatch = false;
  const [resultOfMatch, setResultOfMatch] = useState(false);
  table("users")
    .select({ fields: ["email"] })
    .eachPage((mails) => {
      mails.find((t) => {
        t.fields.email === inputMailData ? setResultOfMatch(true) : null;
      });
    });

  resultOfMatch
    ? console.log("Oh no! That name is already taken")
    : console.log("Yes, this email can be use");

  console.log("inputMailData", inputMailData, "resultOfMatch", resultOfMatch);
};
*/