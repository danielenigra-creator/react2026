import { useState } from "react";
function SearchBar({ movies }) {
    const [searchItem, setsearchItem] = useState("");
    searchItem = movies;
    function handleChange(e) {
        setsearchItem(e.target.value);
    }
    return (

        <div>
            <input type="text" placeholder="Cerca il tuo film" value={searchItem} onChange={handleChange} />
            <p>{searchItem}</p>
        </div>
    )


}
export default SearchBar;