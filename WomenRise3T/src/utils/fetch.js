import axios from "axios";
import Swal from "sweetalert2";

// fetch mentor by search and page
export async function fetchMentors({ searchMentor, page, studi, daerah }) {
  let endpoint = "http://localhost:3000/mentors?all=true";

  if (searchMentor) {
    endpoint += `&search=${searchMentor}`;
  }

  if (page) {
    endpoint += `&page=${page}`;
  }

  if (studi) {
    endpoint += `&studi=${studi}`;
  }

    if (daerah) {
    endpoint += `&daerah=${daerah}`;
  }

  // fetch
  try {
    const response = await axios({
      url: endpoint,
      method: "GET",
    });

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

// fetch detail mentor by id
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



