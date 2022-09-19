import axios from "axios";

export const getFavouritesList = async () => {
  try {
    const res = await fetch("http://localhost:5000/favourites", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
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
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
      body: JSON.stringify(movie),
    });
    const data = await res.json();
    return data;
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${
    //       JSON.parse(localStorage.getItem("user")).token
    //     }`,
    //   },
    // };

    // const res = await axios.post(
    //   "http://localhost:5000/favourites",
    //   movie,
    //   config
    // );
    // console.log(res.data);
    // return res.data;
  } catch (error) {
    throw error;
  }
};

export const getFavourite = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/favourites/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
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
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
