// GitHubService.js
const BASE_URL = "https://api.github.com/search/repositories";

export const searchRepositories = async (query: string, language: string, difficulty: string) => {
  const response = await fetch(
    `${BASE_URL}?q=${query ? query : 'hacktoberfest'}+language:${language ? language : 'react'}+topic:${difficulty? difficulty: 'first-issue'}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok.");
  }

  const data = await response.json();
  return data.items;
};
