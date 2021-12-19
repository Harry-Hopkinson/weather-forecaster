import React from 'react';
import cities from "../lib/city.list.json";

export default function SearchBox() {
    const [query, setQuery] = React.useState("");

    const onChange = (e) => {
        const { value } = e.target;
        setQuery(value);
        let matchingCities = [];

        // Loops through the cities array and checks if the query, if longer than 3, is in the array.
        if (value.length > 3) {
            for (let city of cities) {
                if (matchingCities.length >= 5) {
                    break;
                }
                const match = city.name.toLowerCase().startsWith(value.toLowerCase());
                if (match) {
                    matchingCities.push(city);
                }
            }
        }
    };

    return (
        <div className="search">
            <input type="text" value={query} onChange={onChange}/>
        </div>
    )
}
