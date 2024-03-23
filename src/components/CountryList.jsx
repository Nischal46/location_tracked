import styles from "./CountryList.module.css"
import Message from "./Message";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";

function CountryList(){
    const {cities, isLoading} = useCities();
    if(isLoading) return <Spinner />

    if(!cities.length) return <Message message="Click on a map to add first city in your timeline" />

    const countries = cities.reduce((acc, cur) => {
        if(!acc.map(el => el.country).includes(cur.country)) return [...acc, {country: cur.country
        , emoji: cur.emoji}]
        else return acc;
    }, []);
    

    return (
        <ul className={styles.countryList}>
            {countries.map((country) => (
                <CountryItem key={country.country} country={country} />
            ) )}
        </ul>
    )
}

export default CountryList;