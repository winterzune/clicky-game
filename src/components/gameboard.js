import React from "react";

const GameBoard = props => (
    <div>
        (props.cards.map(element=> (
            (<card image element />)
        );
    </div>
);

export default GameBoard;