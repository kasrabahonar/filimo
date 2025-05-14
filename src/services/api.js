// services/api.js
export async function getMovies() {
  const res = await fetch('https://kasrabahonar.github.io/jsonserver/db.json')
  return await res.api.json()
}
