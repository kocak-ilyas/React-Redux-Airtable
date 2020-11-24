import * as actionTypes from "./actionTypes";

import Airtable from "airtable";
const table = new Airtable({ apiKey: process.env.REACT_APP_airtable_key }).base(
  process.env.REACT_APP_airtable_base
);

export const getAdvertisements = () => (dispatch) => {
  table("advertisement")
    .select({
      fields: ["image", "url"],
      sort: [{ field: "url", direction: "asc" }],
    })
    .eachPage((records) => {
      dispatch({ type: actionTypes.GET_ADVERTISEMENTS, payload: records });
    })
    // .catch((error) => {
    //   // console.log("there is a error");
    //   throw error;
    // });
};

export const getTopNavbar = () => (dispatch) => {
  table("watch")
    .select({
      fields: ["id", "trademark", "category", "gender"],
      sort: [{ field: "id", direction: "asc" }],
    })
    .eachPage((records) => {
      dispatch({ type: actionTypes.GET_TOP_NAVBAR, payload: records });
    });
};

export const getCarousel = () => (dispatch) => {
  table("carousel")
    .select({
      fields: ["image", "url", "name"],
      sort: [{ field: "name", direction: "asc" }],
    })
    .eachPage((records) => {
      dispatch({ type: actionTypes.GET_CAROUSEL, payload: records });
    });
};

export const getProducts = () => (dispatch) => {
  table("watch")
    .select({
      fields: [
        "id",
        "name",
        "trademark",
        "price",
        "stock",
        "image",
        "buyCounter",
        "showCart",
        "countOfCart",
      ],
      sort: [{ field: "buyCounter", direction: "desc" }],
    })
    .eachPage((records) => {
      dispatch({ type: actionTypes.GET_PRODUCTS, payload: records });
    });
};
