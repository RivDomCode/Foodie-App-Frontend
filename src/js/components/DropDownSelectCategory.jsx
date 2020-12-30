import React, {useState} from "react";

const DropDownSelectCategory = () => {
    conts [Dropdown, setDropdown] = useState("Tag your recipe");
    return(
        <form>
            <select value={Dropdown} onChange={(e)=>{setDropdown(e.target.value)}}/>
        </form>
    );
};

export default DropDownSelectCategory;
