/** @format */

import { useState, useEffect, createContext } from "react";
import axios from "axios";
const MyContext = createContext("");
export { MyContext };

export default function Container(props) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [kg, setKg] = useState(JSON.parse(localStorage.getItem("kg")) || null);
  const [isLogin, setIsLogin] = useState(Boolean(user));

  useEffect(() => {
    if (user && user.kg) {
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
            localStorage.setItem("kg", JSON.stringify(response.data.kg));
          } else {
            console.log(response);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <MyContext.Provider
      value={{
        user,
        setUser,
        isLogin,
        setIsLogin,
        kg,
        setKg,
      }}>
      {props.children}
    </MyContext.Provider>
  );
}
