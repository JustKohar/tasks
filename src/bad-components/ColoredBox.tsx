import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;


interface ColoredBoxProps {
    setColorIndex: (newColorIndex: number) => void;
    colorIndex: number;
}

function ChangeColor(colors: ColoredBoxProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                colors.setColorIndex((1 + colors.colorIndex) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview(colors: ColoredBoxProps): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colors.colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    setColorIndex={setColorIndex}
                    colorIndex={colorIndex}
                ></ChangeColor>
                <ColorPreview
                    setColorIndex={setColorIndex}
                    colorIndex={colorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
