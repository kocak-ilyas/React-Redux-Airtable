import Airtable from "airtable";
export const table = new Airtable({
  apiKey: process.env.REACT_APP_airtable_key,
}).base(process.env.REACT_APP_airtable_base);