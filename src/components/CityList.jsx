import { useCities } from "../contexts/CitiesContext";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner"

function CityList(){
    const {cities, isLoading} = useCities();
    if(isLoading) return <Spinner />

    return (<ul className={styles.cityList}>
        {cities.map((city) => {return <CityItem key={city.id} city={city} />})}
    </ul>)
}

export default CityList;

