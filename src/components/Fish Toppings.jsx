import React from "react";

function FishToppings(props) {
    return (
        <div>
            <li>{props.quantity}<span> of {props.name}</span></li>
        </div>
            
    )
}

export default FishToppings;