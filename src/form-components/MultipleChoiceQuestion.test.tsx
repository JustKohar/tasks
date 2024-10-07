import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import { MultipleChoiceQuestions } from "./MultipleChoiceQuestion";
import userEvent from "@testing-library/user-event";

describe("MultipleChoiceQuestion Component tests", () => {
    test("(2 pts) There is a select box", () => {
        render(
            <MultipleChoiceQuestions
                expectedAnswer="2"
                options={["1", "2", "3"]}
            />,
        );
        expect(screen.getByRole("combobox")).toBeInTheDocument();
    });
    test("(2 pts) The answer is initially incorrect", () => {
        render(
            <MultipleChoiceQuestions
                expectedAnswer="2"
                options={["1", "2", "3"]}
            />,
        );
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
    });
    test("(2 pts) Can choose the correct answer", async () => {
        render(
            <MultipleChoiceQuestions
                expectedAnswer="2"
                options={["1", "2", "3"]}
            />,
        );
        const select = screen.getByRole("combobox");
        await act(async () => {
            userEvent.selectOptions(select, "2");
        });
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
    test("(2 pts) Can choose the correct answer and then incorrect", async () => {
        render(
            <MultipleChoiceQuestions
                expectedAnswer="2"
                options={["1", "2", "3"]}
            />,
        );
        const select = screen.getByRole("combobox");
        await act(async () => {
            userEvent.selectOptions(select, "2");
        });
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
        await act(async () => {
            userEvent.selectOptions(select, "3");
        });
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
    });
    test("(2 pts) Can start off initially correct", async () => {
        render(
            <MultipleChoiceQuestions
                expectedAnswer="Alpha"
                options={["Alpha", "Beta", "Gamma"]}
            />,
        );
        const select = screen.getByRole("combobox");
        await act(async () => {
            userEvent.selectOptions(select, "Alpha");
        });
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
    test("(2 pts) One more test of choosing the right answer", async () => {
        render(
            <MultipleChoiceQuestions
                expectedAnswer="World"
                options={["Hello", "World"]}
            />,
        );
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
        const select = screen.getByRole("combobox");
        await act(async () => {
            userEvent.selectOptions(select, "World");
        });
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
});
