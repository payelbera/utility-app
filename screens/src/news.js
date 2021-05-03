// Change YOUR_API_KEY_HERE to your apiKey
const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d6ed0817a2c469594e6e4aba21c5646";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
