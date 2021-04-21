/** @format */

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function SuccessPage(props) {
  let timer;
  let history = useHistory();

  useEffect(() => {
    timer = () =>
      setTimeout(() => {
        history.push("/mpage");
      }, 2000);
    timer();
    return clearTimeout(timer);
  }, []);
  return (
    <div>
      <h3>Child has been edited successfully </h3>
    </div>
  );
}
