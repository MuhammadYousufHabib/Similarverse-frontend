const BASE_URL = "http://localhost:8000"; 
export async function post(query) {
  let requestBody = {};
  let endpoint = `${BASE_URL}/arabic`;

  const surahAyatMatch = query.match(/^(\d+):(\d+)$/);

  if (surahAyatMatch) {
    const [_, surah, ayat] = surahAyatMatch;
    requestBody = { SurahNo: surah, AyahNo: ayat };
     endpoint =`${BASE_URL}`
  } else {
    requestBody = { arabic: query };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch similar Ayats");
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    throw error;
  }
}
