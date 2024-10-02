import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**export function ShoveBox(): React.JSX.Element {
    const [marginLeft, setMarginLeft] = useState<number>(10);

    function shoveBox() {
        setMarginLeft((prevMargin) => prevMargin + 10);
    }

    return (
        <div>
            <Button onClick={shoveBox}>Shove Box</Button>
            <div
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "lightblue",
                    marginLeft: `${marginLeft}px`,
                    display: "inline-block"
                }}
            ></div>
        </div>
    );
}**/
interface MoveableBox {
    position: number;
    setPosition: (newPosition: number) => void;
}

function ShoveBoxButton({
    position,
    setPosition,
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}) {
    return (
        <Button
            onClick={() => {
                setPosition(4 + position);
            }}
        >
            Shove the Box
        </Button>
    );
}

function MoveableBox(props: MoveableBox): React.JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: props.position + "px",
            }}
        ></div>
    );
}

export function ShoveBox(): React.JSX.Element {
    const [position, setPosition] = useState<number>(10);
    return (
        <div>
            <h3>Shove Box</h3>
             <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton
                    position={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
                <MoveableBox position={position} setPosition={setPosition}></MoveableBox>
            </div> 
        </div>
    );
}