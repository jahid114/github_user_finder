export default async function getUserResult(userName: string) {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  if (!response.ok) {
    return undefined;
  }
  return response.json();
}
