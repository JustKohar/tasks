import React, { useState } from "react";
import { Button } from "react-bootstrap";

function d6(): number {
    return Math.floor(Math.random() * 6) + 1;
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(4);
    const [rightDie, setRightDie] = useState<number>(2);

    function rollLeftDie(): void {
        setLeftDie(d6());
    }

    function rollRightDie(): void {
        setRightDie(d6());
    }

    return (
        <div>
            <div>
                <span data-testid="left-die">{leftDie}</span>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            <Button onClick={rollLeftDie}>Roll Left</Button>
            <Button onClick={rollRightDie}>Roll Right</Button>
            {leftDie === rightDie && (
                <div>{leftDie === 1 ? "Lose" : "Win"}</div>
            )}
        </div>
    );
}