import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestions({
    expectedAnswer,
    options
}: {
    expectedAnswer: string;
    options: string[];
}): React.JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Questions</h3>
                <Form.Select
                    value={selectedChoice}
                    onChange = {(e) => {setSelectedChoice(e.target.value)}}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            <div>
                {selectedChoice === expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}