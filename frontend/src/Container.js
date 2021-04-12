/** @format */

import { useState, useEffect, createContext } from "react";
import axios from "axios";
const MyContext = createContext("");
export { MyContext };

export default function Container(props) {
  //const [user, setUser] = useState({});

  //manager:
  // const [user, setUser] = useState({
  //   address: {
  //     city: "kjdbvvkj",
  //     number: "734814",
  //     postcode: 9032590,
  //     street: "sakbcavscj",
  //     _id: "606c19c9ad408838f0e742a8",
  //   },
  //   birthday: "2021-04-02T00:00:00.000Z",
  //   email: "abc@gmail.com",
  //   firstName: "abc",
  //   kg: "606c19c8ad408838f0e742a5",
  //   lastName: "kjnfle",
  //   password: "$2b$08$LJg7zs12ceHsTGf6UAdoAuj7.lHD4ZwTDUPFtZOGqFEQmdQ88LXCS",
  //   phoneNumber: "89127439",
  //   role: "Manager",
  //   _id: "606c19c9ad408838f0e742a7",
  // });

  //teacher:
  const [user, setUser] = useState({
    address: {},
    firstName: "teacher3",
    lastName: "sihckjacs",
    birthday: "2021-04-02T00:00:00.000+00:00",
    phoneNumber: "9838489",
    email: "teacher3@gmail.com",
    groupName: "",
    password: "$2b$08$CsFKqN3lLLWxl3aKQ66M1u/ld0hYhWTAkzmNqsEd4UvL9ByF13CFW",
    kg: "606c19c8ad408838f0e742a5",
    role: "Teacher",
    _id: "606c5bd31dd237103fcb5f57",
  });

  const [kg, setKg] = useState({
    address: {
      _id: "606c19c8ad408838f0e742a6",
      street: "andvkavs",
      number: "893489",
      city: "jhabfhbj",
      postcode: 9824789,
    },
    calendar: [],
    email: "abc@gmail.com",
    name: "abc",
    phoneNumber: "93448",
    verificationCodes: [],
    _id: "606c19c8ad408838f0e742a5",
  });

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("kitacare");
    if (data) {
      let convertedData = JSON.parse(data);
      //if token is there=> setIsLoggedin(true)
      //if userInfo there=> setUser(userInfo)???
    }
  }, []);

  useEffect(() => {
    if (user.kg) {
      axios({
        method: "GET",
        withCredentials: true,
        url: `http://localhost:3001/kg/getKg/${user.kg}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.data.success) {
            setKg(response.data.kg);
          } else {
            console.log(response);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <MyContext.Provider
      value={{ user, setUser, isLogin, setIsLogin, kg, setKg }}>
      {props.children}
    </MyContext.Provider>
  );
}
