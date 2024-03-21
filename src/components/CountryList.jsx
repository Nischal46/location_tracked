import styles from "./CountryList.module.css"
import Message from "./Message";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";

function CountryList({cities, isLoading}){
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
                <CountryItem key={country.id} country={country} />
            ) )}
        </ul>
    )
}

export default CountryList;