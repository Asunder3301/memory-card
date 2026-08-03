import { PokeAPI } from "../src/modules/pokeapi.js";

describe("Return object containing name and sprite url", () => {
  //Mock fetch API
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  //Clean up mocks after tests finish
  afterEach(() => {
    jest.restoreAllMocks();
  });

  const pokemonTests = [
    { input: "cyndaquil", name: "cyndaquil", url: "cyndaquil-url" },
    { input: "rayquaza", name: "rayquaza", url: "rayquaza-url" },
    { input: "psyduck", name: "psyduck", url: "psyduck-url" },
    { input: "flareon", name: "flareon", url: "flareon-url" },
  ];

  pokemonTests.forEach((pokemon) => {
    test(`Return ${item.input}'s data`, async () => {
      //Mock successful PokeAPI response
      const mockResponse = {
        forms: [{ name: pokemon.name }],
        sprites: { front_default: pokemon.url },
      };

      //Force fetch to resolve with mock object
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });
    });
  });
});
