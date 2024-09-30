import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    function toggleVisibility(): void {
        setIsVisible(prevVisibility => !prevVisibility);
    }

    return (
        <div>
            <Button onClick={toggleVisibility}>Reveal Answer</Button>
            {isVisible && <div>42</div>}
        </div>
    );
}
