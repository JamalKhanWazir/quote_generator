import axios from "axios";

const API_Key = "ovzakDb2wkb82DkGsQH7tjAOuOHPlEH0ZOBYTNWs";
// const category = "mom";

const base_url = `https://api.api-ninjas.com/v1/quotes?category=`;

export const fetchData = async (category) => {
  try {
    const response = await axios.get(`${base_url}${category}`, {
      headers: {
        "X-Api-Key": API_Key,
        "Content-Type": "application/json",
      },
    });
    // .then((res) => (console.log(res.data)) )
    // .catch(err => console.log(err))

    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error found " + error.message);
  }
};

// fetchData();
