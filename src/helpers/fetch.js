const urlBase = process.env.REACT_APP_API;
const urlBaseSpotify = process.env.REACT_APP_API_SPOTIFY;

export const fetchWithOutToken = (endpoint, data, method = "GET") => {
  const url = `${urlBase}/${endpoint}`;

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

export const fetchWithToken = (endpoint, data, method = "GET") => {
  const url = `${urlBase}/${endpoint}`;

  const token = localStorage.getItem("refreshToken") || "";

  if (method === "GET") {
    return fetch(url, {
      headers: {
        token: token,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify(data),
    });
  }
};

export const fetchWithTokenSpotify = (endpoint, data, method = "GET") => {
  const url = `${urlBaseSpotify}/${endpoint}`;

  const token = localStorage.getItem("token") || "";

  if (method === "GET") {
    return fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(data),
    });
  }
};
