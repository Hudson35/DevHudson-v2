import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

/*
Every test we write generally involves the following steps:
    1. Render the component (make sure it renders successfully)
    2. Find an element rendered by the component
    3. Assert against the element found in step 2, which will pass or fail the test
*/

describe("Hero Component", () => {
    test("There is a section element in the document", () => {
        render(<Hero />);
        const section = screen.getByRole('region');
        expect(section).toBeInTheDocument();
    })

    test("There is an h1 element", () => {
        render(<Hero />);
        const h1Text = screen.getByRole('heading', {
            level: 1
        });
        expect(h1Text).toBeInTheDocument();
    })

    test("There is a paragraph element", () => {
        render(<Hero />);
        const para1 = screen.getByRole('paragraph1');
        expect(para1).toBeInTheDocument();
    })
})