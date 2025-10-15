import styles from "./Countries.module.css";

function Countries({ cities }) {
    const countries = cities.reduce((arr, cityObj) => {
        if (!arr.map(obj => obj.country).includes(cityObj.country))
            return [...arr, {id: cityObj.id, country: cityObj.country, emoji: cityObj.emoji}]
        else return arr
    }, [])
  return (
    <div className={styles.countries}>
      {countries.map((countryObj) => (
        <Country key={countryObj.id} countryIcon={countryObj.emoji} countryName={countryObj.country} />
        ))}
    </div>
  );
}
function Country({ countryIcon, countryName }) {
  return <div className={styles.country}>
    <span> {countryIcon} </span>
    <p> {countryName} </p>
  </div>;
}

export default Countries;
