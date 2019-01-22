import React from "react";

const gameboard = props => (
    <div>
        (props.cards.map(element=> (
            (<card image element />)
        );
    </div>
);

export default gameboard;