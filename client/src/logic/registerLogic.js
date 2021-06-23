/** @format */

import axios from "axios";

const submitForm = (e) => {
  const formData = new FormData(e.target);
  let obj = {
    address: {},
    emergencyContact: [{}, {}],
    allergies: [],
  };
  for (let pair of formData) {
    if (
      pair[0] === "city" ||
      pair[0] === "street" ||
      pair[0] === "number" ||
      pair[0] === "postcode"
    ) {
      obj.address[pair[0]] = pair[1];
    } else if (
      pair[0] === "emerName1" ||
      pair[0] === "emerEmail1" ||
      pair[0] === "emerNumber1"
    ) {
      obj.emergencyContact[0][pair[0]] = pair[1];
    } else if (
      pair[0] === "emerName2" ||
      pair[0] === "emerEmail2" ||
      pair[0] === "emerNumber2"
    ) {
      obj.emergencyContact[1][pair[0]] = pair[1];
    } else if (
      pair[0] === "Eggs" ||
      pair[0] === "Milk" ||
      pair[0] === "Peanuts" ||
      pair[0] === "Soy" ||
      pair[0] === "Wheat" ||
      pair[0] === "Tree Nuts" ||
      pair[0] === "Seefood" ||
      pair[0] === "Fish" ||
      pair[0] === "Raw Fruit" ||
      pair[0] === "Raw Veggies"
    ) {
      obj.allergies.push(pair[0]);
    } else {
      obj[pair[0]] = pair[1];
    }
  }
  return obj;
};

const sendData = (type, payload) => {
  let url = "";

  // "kg registration"
  if (type === "kg registration") {
    url = `${process.env.REACT_APP_BASE_URL}/kg/register`;
  }

  // "manager registration"
  else if (type === "manager registration") {
    url = `${process.env.REACT_APP_BASE_URL}/users/managers`;
  }

  // "child registration"
  else if (type === "child registration") {
    url = `${process.env.REACT_APP_BASE_URL}/child/addChild`;
  }

  //"teacher registration"
  else {
    url = `${process.env.REACT_APP_BASE_URL}/users/teacher`;
  }
  axios({
    method: "POST",
    url: url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data: payload,
  })
    .then((response) => {
      if (response.data.success) {
        return response.data.email;
      } else {
        console.log(response);
        return false;
      }
    })
    .catch((err) => console.log(err));
};

export { submitForm, sendData };
