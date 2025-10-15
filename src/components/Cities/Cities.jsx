import styles from './Cities.module.css'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const convertDate = (date) => {
    const newDate = new Date(date)
    const dateString = newDate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    return dateString
}

function Cities({cities, setCities}) {
    return (
      <div className={styles.cities}>
        {cities?.length > 0 ? (
          cities?.map((cityObj) => (
            <City cityObj={cityObj} key={cityObj.id} setCities={setCities} />
          ))
        ) : (
          <DisplayEmptyMessage />
        )}
      </div>
    );
}
function DisplayEmptyMessage(){
    return <p className={styles.displayMessage}>
        Hey👋, add a city by clicking on the map
    </p>
}
function City({cityObj, setCities}){
    function handleDeletion(){
        setCities(cities => (
            cities.filter(cityItem => cityItem.id != cityObj.id)
        ))
    }
    return (
      <Link to={`${cityObj.id}?lat=${cityObj.position.lat}&lng=${cityObj.position.lng}`}>
        <div className={styles.city}>
          <div className={styles.cityData}>
            <span>{cityObj.emoji}</span>
            <p>{cityObj.cityName}</p>
          </div>
          <div className={styles.visitedDate}>
            <time>{convertDate(cityObj.date)}</time>
            <Button onClick={handleDeletion}>✖️</Button>
          </div>
        </div>
      </Link>
    );
}
export default Cities
