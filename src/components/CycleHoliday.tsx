import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    Christmas = "🎄",
    Halloween = "🎃",
    NewYear = "🎆",
    Thanksgiving = "🦃",
    Valentines = "❤️"
}

const holidaysAlphabetically = [
    Holiday.Christmas,
    Holiday.Halloween,
    Holiday.NewYear,
    Holiday.Thanksgiving,
    Holiday.Valentines
];

const holidaysByYear = [
    Holiday.NewYear,
    Holiday.Valentines,
    Holiday.Halloween,
    Holiday.Thanksgiving,
    Holiday.Christmas
];

function nextHolidayAlphabetically(current: Holiday): Holiday {
    const currentIndex = holidaysAlphabetically.indexOf(current);
    return holidaysAlphabetically[(currentIndex + 1) % holidaysAlphabetically.length];
}

function nextHolidayByYear(current: Holiday): Holiday {
    const currentIndex = holidaysByYear.indexOf(current);
    return holidaysByYear[(currentIndex + 1) % holidaysByYear.length];
}

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(Holiday.Christmas);

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button onClick={() => setCurrentHoliday(nextHolidayAlphabetically(currentHoliday))}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setCurrentHoliday(nextHolidayByYear(currentHoliday))}>
                Advance by Year
            </Button>
        </div>
    );
}