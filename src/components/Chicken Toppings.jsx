import React from "react";

function ChickenToppings(props) {
    return (
        <div>
            <li>{props.quantity}<span> of {props.name}</span></li>
        </div>
            
    )
}

export default ChickenToppings;