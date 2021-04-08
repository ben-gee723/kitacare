/** @format */

import axios from "axios";

const submitForm = (e) => {
  const formData = new FormData(e.target);
  let obj = { address: {} };
  for (let pair of formData) {
    if (
      pair[0] === "city" ||
      pair[0] === "street" ||
      pair[0] === "number" ||
      pair[0] === "postcode"
    ) {
      obj.address[pair[0]] = pair[1];
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
    url = "http://localhost:3001/kg/register";
  }

  // "manager registration"
  else if (type === "manager registration") {
    url = "http://localhost:3001/users/managers";
  }

  // "child registration"
  else if (type === "child registration") {
    url = "http://localhost:3001/child/addChild";
  }

  //"teacher registration"
  else {
    url = "http://localhost:3001/users/teacher";
  }
  axios({
    method: "POST",
    url: url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: payload,
  })
    .then((response) => {
      if (response.data.success) {
        console.log(response.data);
        //push user to login page with user's email attached to props:
        return response.data.email;
      } else {
        console.log(response);
        return false;
      }
    })
    .catch((err) => console.log(err));
};

export { submitForm, sendData };
