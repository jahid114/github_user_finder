export default async function getRepos(reposUrl: string) {
  const response = await fetch(`${reposUrl}`);
  if (!response.ok) {
    return undefined;
  }
  return response.json();
}
