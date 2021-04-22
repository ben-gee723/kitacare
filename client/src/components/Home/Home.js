import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt, faCalendarAlt, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCalendarMinus } from "@fortawesome/free-regular-svg-icons";
import kids from "../../images/kids.svg"
import styles from "./Home.module.scss"

export default function Home() {
  const arrow = <FontAwesomeIcon icon={faExchangeAlt} size='2x' />;
  const calendar1 = <FontAwesomeIcon icon={faCalendarMinus} size='2x'/>;
  const calendar2 = <FontAwesomeIcon icon={faCalendarAlt} size='2x'/>;
  const check = <FontAwesomeIcon icon={faCheckCircle} size='2x'/>;
  return (
    <div className={styles.hcontainer}>
      <div className={styles.hero}>
        <div className={styles.header}>
          <h1>Best managment tool, for your kindergarten.</h1>
          <h3>
            Kitacare application is a specialised tool that offers multiple
            kindergartens the means to seamlessly manage their classroom.
          </h3>        
        </div>

        <div className={styles.svgHome}>
          <img src={kids} alt="kids"className={styles.kids}/>
        </div>
      </div>

      <div className={styles.icons}>
        <div className={styles.icon}>
            <p className={styles.po}>{arrow}</p>
            <p className={styles.ptag}>Manage teachers and groups and access information about them quickly and easily</p>
        </div>
        <div className={styles.icon}>
            <p>{calendar1}</p>
            <p className={styles.ptag}>Overview of the group calendar and year schedule, as well as the attendence lits</p>
        </div>
        <div className={styles.icon}>
            <p className={styles.po}>{calendar2}</p>
            <p className={styles.ptag}>Create the group schedule and set meetings and events fast and easily</p>
        </div>
        <div className={styles.icon}>
            <p>{check}</p>            
            <p className={styles.ptag}>Child information in one click, avoiding mistakes, making easy and more assertive the teachers decisions</p>            
        </div>
      </div>
    </div>
  );
}
