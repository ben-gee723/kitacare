import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styles from "./calendar.module.scss";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

export default function EventsCalendar() {
  const backspace = <FontAwesomeIcon icon={faBackspace} size='2x' />;
  const [showEvents, setShowEvents] = useState([]);
  const dateFormat = "dd/MM";
  const history = useHistory();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3001/calendar/getAllEvents`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(result => {
        if (result.data.success) {
          setShowEvents(result.data.event);
        } else {
          console.log(result.data.getAllEvents);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = id => {
    axios(`http://localhost:3001/calendar/deleteSingleEvent/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }).then(result => {
      if (result.data.success) {
        console.log(result.data);
        history.go(0);
      } else {
        console.log(result);
      }
    });
  };

  return (
    <div>
      {showEvents.map(event => {
        return (
          <div className={styles.container}>
            <p>
              <span className={styles.date}>
                {" "}
                {format(new Date(event.startDate), dateFormat)} -{" "}
                {format(new Date(event.endDate), dateFormat)}{" "}
              </span>{" "}
              : {event.name}
            </p>
            <button
              type='submit'
              value='delete'
              className={styles.delete}
              onClick={() => handleDelete(event._id)}
            >
              {backspace}
            </button>
          </div>
        );
      })}
    </div>
  );
}
