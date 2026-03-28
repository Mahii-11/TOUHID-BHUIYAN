const BASE_URL = "https://backend.touhidbhuiyan.com/api";

async function fetchData(url, options = {}) {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Request failed: ${res.status} - ${errorText}`);
    }

    const json = await res.json();
    return json?.data ?? [];
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    return [];
  }
}

// Existing fetchData thik ache baki API jonne
// Alada function for cards:
export const getCards = async () => {
  try {
    const res = await fetch(`${BASE_URL}/expertise-data`);
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Request failed: ${res.status} - ${errorText}`);
    }
    const json = await res.json();
    
    // Direct array return for Cards component
    return json?.data?.data ?? [];
  } catch (error) {
    console.error(`Error fetching expertise data:`, error);
    return [];
  }
};

export const getHeroData = () => {
  return fetchData(`${BASE_URL}/slider-data`);
};

export const getPublicationData = () => {
    return fetchData(`${BASE_URL}/activity-data`);
}


export const getSocialImpactData = () => {
  return fetchData(`${BASE_URL}/services-data`);
}


export const getSocialMediaIcon = () => {
  return fetchData(`${BASE_URL}/social-data`);
}


export const getStatsSection = () => {
  return fetchData(`${BASE_URL}/achievement-data`);
}

export const getSettings = () => {
  return fetchData(`${BASE_URL}/setting-data`);
}


export const getPublication = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/publication-data?page=${page}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const json = await res.json();
  return json.data;
}




export const fetchVideos = async () => {
  try {
    const res = await fetch(`${BASE_URL}/video-gallery-data`);
    const json = await res.json();

    return json?.data?.data || [];
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};