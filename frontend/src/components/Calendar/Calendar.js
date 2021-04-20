/** @format */

import React, { useEffect, useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  toDate,
  addMonths,
  subMonths,
  parse
} from "date-fns";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CalendarForm from "./CalendarForm";
import axios from "axios";

export default function Calendar() {
  const left = <FontAwesomeIcon icon={faChevronCircleLeft} />;
  const right = <FontAwesomeIcon icon={faChevronCircleRight} />;
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showForm, setShowForm] = useState(false);
  const [showEvents, setShowEvents] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3001/calendar/getAllEvents`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      .then((result) => {
        if (result.data.success) {
          setShowEvents(result.data.event);
        } else {
          console.log(result.data.getAllEvents);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const header = () => {
    const dateFormat = "MMMM yyyy";
    return (
      <div className='header row flex-middle'>
        <div className='column col-start'>
          <div className='icon' onClick={prevMonth}>
            {left}
          </div>
        </div>
        <div className='column col-center'>
          <p className='month'>{format(currentDate, dateFormat)}</p>
        </div>
        <div className='column col-end'>
          <div className='icon' onClick={nextMonth}>
            {right}
          </div>
        </div>
      </div>
    );
  };
  const days = () => {
    const dateFormat = "EEEE";
    const days = [];
    let startDate = startOfWeek(currentDate);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className='column col-center' key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className='days row'>{days}</div>;
  };
  const cells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;

    //console.log(day)

    let formattedDate = "";


    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;

        const relatedEvent = showEvents.find((event) => {
          return isSameDay(Date.parse(day), Date.parse(event.startDate));
        });

        days.push(
          <div
            className={`column cell ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, selectedDate) || relatedEvent
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={() => onDateClick(toDate(cloneDay))}>
            <span className='number'>{formattedDate}</span>
            <span className='bg'>{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className='row' key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className='body'>{rows}</div>;
  };

  // const events = () => {
  //   const monthStart = startOfMonth(currentDate);
  //   const dateFormat = "d";
  //   const rows = [];
  //   let days = [];
  //   let formattedDate = "";
  //
  //     return showEvents.map(events => {
  //       const eventObj = {
  //         ...events,
  //         startDate: events.startDate.split("T"),
  //         endDate: events.endDate.split("T"),
  //       };
  //     //  console.log(eventObj);
  //       for (const i in eventObj.startDate) {
  //         let firstDay = new Date(eventObj.startDate[i]);
  //         const endDay = new Date(eventObj.endDate[i]);
  //         while (firstDay <= endDay) {
  //           for (let i = 0; i < 1; i++) {
  //             formattedDate = format(firstDay, dateFormat);
  //             const cloneDay = firstDay;
  //             console.log(firstDay);
  //             days.push(
  //               <div
  //                 className={`column cell ${
  //                   !isSameMonth(firstDay, monthStart) ? firstDay : false
  //                 }`}
  //                 key={firstDay}
  //                 onClick={() => onDateClick(toDate(cloneDay))}
  //               >
  //                 <span className='number'>{formattedDate}</span>
  //                 <span className='bg'>{formattedDate}</span>
  //               </div>
  //             );
  //             firstDay = addDays(firstDay, 1);
  //           }
  //           rows.push(
  //             <div className='row' key={firstDay}>
  //               {days}
  //             </div>
  //           );
  //           days = [];
  //         }
  //       }
  //       return <div className='body'>{rows}</div>;
  //     });
  // };

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };
  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <div className='calendar'>
      {showForm && (
        <div>
          <CalendarForm />
        </div>
      )}
      <>
        <div>{header()}</div>
        <div>{days()}</div>
        {/*<div style={{ backgroundColor: "red" }}>{events()}</div>*/}
        <div onClick={() => setShowForm(!showForm)}>{cells()}</div>
      </>
    </div>
  );
}
