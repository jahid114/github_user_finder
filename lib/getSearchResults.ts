export default async function getSearchResults(searchTerm: string) {
  const searchParams = new URLSearchParams({
    q: searchTerm,
  });

  const response = await fetch('https://api.github.com/search/users?' + searchParams);
  if (!response.ok) {
    return undefined;
  }
  return response.json();
}
