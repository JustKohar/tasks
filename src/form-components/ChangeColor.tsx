import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "brown"];
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <Form.Check
                    key={color}
                    type="radio"
                    name="color"
                    value={color}
                    label={color}
                    inline
                    checked={selectedColor === color}
                    onChange={handleColorChange}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}