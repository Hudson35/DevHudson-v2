import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

/*
Every test we write generally involves the following steps:
    1. Render the component (make sure it renders successfully)
    2. Find an element rendered by the component
    3. Assert against the element found in step 2, which will pass or fail the test
*/

describe("Navbar", () => {
    test("nav tag renders", () => {
        render(<Navbar />);
        const navbar = screen.getByRole('navigation');
        expect(navbar).toBeInTheDocument();
    })

    test("p tag with content devHudson renders", () => {
        render(<Navbar />);
        const devHudson = screen.getByText('devHudson');
        expect(devHudson).toBeInTheDocument();
    })
})