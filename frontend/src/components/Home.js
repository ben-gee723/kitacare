import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt, faCalendarAlt, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCalendarMinus } from "@fortawesome/free-regular-svg-icons";
import kids from "../images/kids.svg"

export default function Home() {
  const arrow = <FontAwesomeIcon icon={faExchangeAlt} />;
  const calendar1 = <FontAwesomeIcon icon={faCalendarMinus} />;
  const calendar2 = <FontAwesomeIcon icon={faCalendarAlt} />;
  const check = <FontAwesomeIcon icon={faCheckCircle} />;
  return (
    <div>
      <h1>Best managment tool, for your kindergarten.</h1>
      <div>
        <h3>
          Kitacare application is a specialised tool that offers multiple
          kindergartens the means to seamlessly manage their classroom.
        </h3>
        <img src={kids} alt="kids"/>
      </div>
      <div>
          <p>{arrow}</p>
          <p>Manage teachers and groups and access information about them quickly and easily</p>
      </div>
      <div>
          <p>{calendar1}</p>
          <p>Overview of the group calendar and year schedule, as well as the attendence lits</p>
      </div>
      <div>
          <p>{calendar2}</p>
          <p>Create the group schedule and set meetings and events fast and easily</p>
      </div>
      <div>
          <p>{check}</p>
          <p>Child information in one click, avoiding mistakes, making easy and more assertive the teachers decisions</p>
      </div>
    </div>
  );
}
