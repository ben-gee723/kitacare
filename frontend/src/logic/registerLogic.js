import axios from "axios";

const submitForm = (e) => {
  e.preventDefault();
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
  return obj
}

const sendData = (type, payload) => {
  let url = "";

  // "kg registration"
  if (type === "kg registration") { url = "http://localhost:3001/kg/register" }

  // "manager registration"
  else if (type === "manager registration") { url = "http://localhost:3001/users/managers" }

  // "child registration"
  else if (type === "child registration") { url = "http://localhost:3001/child/addChild" }

  //"teacher registration"
  else { url = "http://localhost:3001/users/teachers" }
  axios({
    method: "POST",
    url: url,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    data: payload,
  })
    .catch(err => console.log(err));
}

export { submitForm, sendData }