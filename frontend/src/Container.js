/** @format */

import { useState, useEffect, createContext } from "react";
import axios from "axios";
const MyContext = createContext("");
export { MyContext };

export default function Container(props) {
  const [user, setUser] = useState({});
  const [kg, setKg] = useState(null);
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
    console.log(user);
    if (user.kg) {
      axios({
        method: "GET",
       // withCredentials: true,
        url: `http://localhost:3001/kg/getKg/${user.kg}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.data.success) {
            console.log(response.data);
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
