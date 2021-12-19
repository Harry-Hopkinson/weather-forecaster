import React from 'react';
import city from "../lib/city.list.json";

export default function SearchBox() {
    const [query, setQuery] = React.useState("");

    const onChange = (e) => {
        const { value } = e.target;
        setQuery(value);
    };

    return (
        <div className="search">
            <input type="text" value={query} onChange={onChange}/>
        </div>
    )
}
