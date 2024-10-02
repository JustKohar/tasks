import React, { useState } from "react";
import { Button } from "react-bootstrap";

const people = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

export function ChooseTeam(): React.JSX.Element {
    const [team, setTeam] = useState<string[]>([]);

    function addToTeam(person: string) {
        if (!team.includes(person)) {
            setTeam([...team, person]);
        }
    }

    function clearTeam() {
        setTeam([]);
    }

    return (
        <div>
            <div>
                {people.map((person) => (
                    <Button key={person} onClick={() => {addToTeam(person)}}>
                        {person}
                    </Button>
                ))}
                <Button onClick={clearTeam}>Clear Team</Button>
            </div>
            <div>
                <h3>Team:</h3>
                <ul>
                    {team.map((member) => (
                        <li key={member}>{member}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}