import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Character from "./character";

describe("Character", () => {
  describe("given a single Character", () => {
    const morty = {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    };

    beforeEach(() => {
      render(<Character bio={morty} />);
    });

    it("should display the image of the character", () => {
      const image = screen.getByAltText(/Morty Smith/i);

      expect(image).toBeVisible();
    });

    test.each([
        ["Name", "Morty Smith"],

    ])(
      "should show a label %s with value %s",
      (label, value) => {
        const text = screen.getByText(`${label}: ${value}`);

        expect(text).toBeVisible()
      }
    );
  });
});