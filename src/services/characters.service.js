export const getCharacters = async (offset) => {
  const response = await fetch(
    `https://kitsu.io/api/edge/characters?page[limit]=10&page[offset]=${offset}`
  );
  const responseJson = await response.json();

  return responseJson;
};

export const getCharactersByName = async (name, offset) => {
  const response = await fetch(
    `https://kitsu.io/api/edge/characters?filter%5Bname%5D=${name}?page[limit]=10&page[offset]=${offset}`
  );
  const responseJson = await response.json();

  return responseJson;
};

export const getMedia = async (url) => {
  const response = await fetch(url);
  const responseJson = await response.json();

  return responseJson;
};
