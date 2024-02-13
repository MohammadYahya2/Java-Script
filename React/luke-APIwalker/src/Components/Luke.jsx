import React, { useState } from "react";
import { useNavigate} from "react-router-dom";

const Luke = (props) => {
const [search, setsearch] = useState("");
const [id, setId] = useState('');
const navigate = useNavigate();


return (
<form onSubmit={ Luke }>
    <label htmlFor="">Search for :
    <select >
            <option value="people">People</option>
            <option value="planets">Planets</option>
    </select>
    </label>
    <label htmlFor="">
        iD:
        <input type="number" />
        <button type="submit">Search</button>
    </label>
</form>
);
}
