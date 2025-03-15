const baseUrl = import.meta.env.VITE_API_BASE_URL;
export const staleTime = 10 * 60 * 1000; // 10 min

export async function getAllCharacters() {
  const response = await fetch(`${baseUrl}/characters`);
  const data = await response.json();
  return data.filter((item) => item.image);
}

export async function getStudents() {
  const response = await fetch(`${baseUrl}/characters/students`);
  const data = await response.json();
  return data.filter((item) => item.image);
}

export async function getStaff() {
  const response = await fetch(`${baseUrl}/characters/staff`);
  const data = await response.json();
  return data.filter((item) => item.image);
}

export async function getCharactersByHouse(house) {
  const response = await fetch(`${baseUrl}/characters/house/${house}`);
  const data = await response.json();
  return data.filter((item) => item.image);
}
