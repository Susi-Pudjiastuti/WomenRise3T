import axios from "axios";
import Swal from "sweetalert2";

// fetch mentor by search and page
export async function fetchMentors({ searchMentor, page }) {
  let endpoint = "http://localhost:3000/mentors?all=true";

  if (searchMentor) {
    endpoint += `&search=${searchMentor}`;
  }

  if (page) {
    endpoint += `&page=${page}`;
  }

  // fetch
  try {
    const response = await axios({
      url: endpoint,
      method: "GET",
    });

    console.log(response);
    return response.data;
  } catch (error) {
    if (error.response) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${error.response.data.message}`,
      });
    }
    throw error;
  }
}

// fetch mentor for use context
export async function fetchMentorsById({ id }) {
  try {
    let endpoint = `http://localhost:3000/mentors/${id}`;

    // fetch
    const response = await axios({
      url: endpoint,
      method: "GET",
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${error.response.data.message}`,
      });
    }
    throw error;
  }
}
