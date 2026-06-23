import { useState } from "react";

export default function SearchBar({ setQuery }) {

    let [val, setval] = useState("");

    function Handler() {
        if (val.trim() !== "") {
            setQuery(val);
        }
    }

    return (
        <div className="search-container">

            <input
                value={val}
                onChange={(e) => setval(e.target.value)}
                type="text"
                placeholder="Search for a movie..."
                className="search-input"
            />

            <button onClick={Handler} className="search-button">
                Search
            </button>

        </div>
    );
}