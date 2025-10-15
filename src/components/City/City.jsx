import { useParams } from 'react-router'
import styles from './City.module.css'

function City({cities}) {
    const parameter = useParams()
    const selectedCity = cities.find(cityObj => cityObj.id === parameter.id)
    console.log(selectedCity)
    return (
        <div>
            City
        </div>
    )
}

export default City
