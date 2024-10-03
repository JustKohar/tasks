import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestions({ options }: { options: string[] }): React.JSX.Element {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedOption(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form>
                {options.map((option) => (
                    <Form.Check
                        key={option}
                        type="radio"
                        label={option}
                        value={option}
                        checked={selectedOption === option}
                        onChange={handleChange}
                    />
                ))}
            </Form>
            <div>
                {selectedOption && `Selected: ${selectedOption}`}
            </div>
        </div>
    );
}