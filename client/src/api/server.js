export const getFavouritesList = async () => {
  try {
    const res = await fetch("http://localhost:5000/favourites", {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const addFavourite = async (movie) => {
  // movie = { movie: movie };
  try {
    const res = await fetch("http://localhost:5000/favourites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getFavourite = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/favourites/${id}`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteFavourite = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/favourites/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
