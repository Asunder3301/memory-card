export class PokeAPI {
  static async #fetchData(searchTerm) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error. Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  static async getData(searchTerm) {
    const pokeObj = await this.#fetchData(searchTerm);
    const name = pokeObj["forms"][0]["name"];
    const image = pokeObj["sprites"]["front_default"];

    return { name, image };
  }
}
