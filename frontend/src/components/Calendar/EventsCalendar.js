import React from "react";

export default function EventsCalendar() {
  const events = () => {
    const monthStart = startOfMonth(currentDate);
    {
      showEvents.map(events => {
        const eventObj = {
          ...events,
          startDate: events.startDate.split("T"),
          endDate: events.endDate.split("T"),
        };
        console.log(eventObj);
        for (const i in eventObj.startDate) {
          const dateFormat = "d";
          const dateFormat3 = "MM";
          if (
            format(monthStart, dateFormat3) ===
            format(new Date(eventObj.startDate[i]), dateFormat3)
          ) {
            return (
              <div>{format(new Date(eventObj.startDate[i], dateFormat))}</div>
            );
          } else {
            console.log("different month");
          }
        }
      });
    }
  };

  const events = () => {
    const monthStart = startOfMonth(currentDate);
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let formattedDate = "";
    {
      showEvents.map(events => {
        const eventObj = {
          ...events,
          startDate: events.startDate.split("T"),
          endDate: events.endDate.split("T"),
        };
        console.log(eventObj);
        for (const i in eventObj.startDate) {
          let firstDay = new Date(eventObj.startDate[i]);
          const endDay = new Date(eventObj.endDate[i]);
          while (firstDay <= endDay) {
            for (let i = 0; i < 7; i++) {
              formattedDate = format(firstDay, dateFormat);
              const cloneDay = firstDay;
              days.push(
                <div
                  className={`column cell ${
                    !isSameMonth(firstDay, monthStart)
                      ? "disabled"
                      : isSameDay(firstDay, selectedDate)
                      ? "selected"
                      : ""
                  }`}
                  key={firstDay}
                  onClick={() => onDateClick(toDate(cloneDay))}
                >
                  <span className='number'>{formattedDate}</span>
                  <span className='bg'>{formattedDate}</span>
                </div>
              );
              firstDay = addDays(firstDay, 1);
            }
            rows.push(
              <div className='row' key={firstDay}>
                {days}
              </div>
            );
            days = [];
          }
        }
        return <div className='body'>{rows}</div>;
      });
    }
  };
}
