import axios from "axios";
import Swal from "sweetalert2";

// fetch mentor by search and page
export async function fetchMentors({ searchMentor, page, studi, daerah }) {
  let endpoint =
    "https://indirect-rosalind-rasunasaid1-522f984c.koyeb.app/mentors?all=true";

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
    let endpoint = `https://indirect-rosalind-rasunasaid1-522f984c.koyeb.app/mentors/${id}`;

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

export async function GenerateMotivation() {
  const user = JSON.parse(localStorage.getItem("user"));
  try {
    let prompt =
      "You are a generator motivation expert for education. Your mission is to increase confidence 3T marginal women to achieve scholarship and never give up to education by her name and her city, and  and use <blockquote> around the motivation with quotation mark and give emoji at the end. Make sure to follow the user instructions and indonesia language.";
    let context = `User instructions: Generate a motivation about ${user.namaLengkap} from ${user.asalDaerah}`;
    const { data } = await axios.get(
      `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=` +
        import.meta.env.VITE_API_KEY
    );
    return data.answer;
  } catch (error) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `Something went wrong!`,
    });
  }
}

export async function fetchScholarship() {
  try {
    let endpoint = `https://indirect-rosalind-rasunasaid1-522f984c.koyeb.app/scholarships`;

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

export async function addScholarship({ input }) {
  let endpoint =
    "https://indirect-rosalind-rasunasaid1-522f984c.koyeb.app/scholarships";

  const { data } = await axios({
    url: endpoint,
    method: "POST",
    data: input,
  });
  return data;
}

export async function deleteScholarship({ id }) {
  let endpoint = `https://indirect-rosalind-rasunasaid1-522f984c.koyeb.app/scholarships/${id}`;

  const { data } = await axios({
    url: endpoint,
    method: "DELETE",
  });
  return data;
}
