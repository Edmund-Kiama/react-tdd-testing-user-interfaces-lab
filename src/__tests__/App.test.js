import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm Edmund`", () => {

    render(<App />);
 
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm edmund/i,
      exact: false,
      level: 1,
    });
  
    expect(topLevelHeading).toBeInTheDocument();
  });

  test("displays an image of yourself", () => {
    render(<App />);
  
    const image = screen.getByAltText("Edmund's profile picture");
  
    expect(image).toHaveAttribute("src", "https://i.pinimg.com/236x/b9/f7/01/b9f70124c3752c06b8b8bd6105385c26.jpg");
  });
  
  test("displays second-level heading with the text `About Me`", () => {
    render(<App />);
  
    const secondLevelHeading = screen.getByRole("heading", {
      name: /about me/i,
      level: 2,
    });
  
    expect(secondLevelHeading).toBeInTheDocument();
  });
  
  test("displays a paragraph for your biography", () => {
    render(<App />);
  
    const bio = screen.getByText(/a passionate developer who loves learning/i);
  
    expect(bio).toBeInTheDocument();
  });
  
  test("displays the correct links", () => {
    render(<App />);
  
    const githubLink = screen.getByRole("link", {
      name: /github/i,
    });
    const linkedinLink = screen.getByRole("link", {
      name: /linkedin/i,
    });
  
    expect(githubLink).toHaveAttribute(
      "href",
      expect.stringContaining("https://github.com")
    );
  
    expect(linkedinLink).toHaveAttribute(
      "href",
      expect.stringContaining("https://linkedin.com")
    );
  });