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
  if (type === "kg registration") {
    url = "http://localhost:3001/kg/register";
  } else if (type === "manager registration") {
    url = "http://localhost:3001/users/managers";
  } //"teacher registration"
  else {
    url = "http://localhost:3001/users/teachers";
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
        //res.send({ success: true, kg: kg, manager: manager, message: "kindergarden and its manager saved into db" })
        console.log(response.data);
      } else {
        console.log(response);
      }
    })
    .catch((err) => console.log(err));
};

export { submitForm, sendData };
