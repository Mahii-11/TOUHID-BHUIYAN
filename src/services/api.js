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



export const getCapabilitiesDetails = async (slug) => {
  try {
    if (!slug) throw new Error("Slug is required for capabilities details");

    const res = await fetch(`${BASE_URL}/expertise-details-data/${slug}`); 
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Request failed: ${res.status} - ${errorText}`);
    }
    const json = await res.json();

    // Return single object
    return json?.data ?? null;
  } catch (error) {
    console.error(`Error fetching capability details:`, error);
    return null;
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

export const getProfessionalExperiences = () => {
  return fetchData(`${BASE_URL}/professional-experiences`);
}


export const getAchievementsAwards = () => {
  return fetchData(`${BASE_URL}/awards-data`);
}


export const getDegrees = () => {
  return fetchData(`${BASE_URL}/education-data`);
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

export const getSocialData = () => {
  return fetchData(`${BASE_URL}/social-data`)
}


export const getPublication = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/publication-data?page=${page}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const json = await res.json();
  return json.data;
}


export const getPublicationHome = async () => {
  const res = await fetch (`${BASE_URL}/latest-publication-data`);
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




//post request for contact form
export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/store-contact`,
      {
        method: "POST",
        body: formData, 
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};