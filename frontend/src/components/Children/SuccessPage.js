/** @format */

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./success.module.scss";

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
    <div className={styles.sPage}>
      <h3>Child has been edited successfully </h3>
    </div>
  );
}
