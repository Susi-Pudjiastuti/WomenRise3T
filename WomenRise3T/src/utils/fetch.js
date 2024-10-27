import axios from "axios";

// fetch mentor
export async function fetchMentors({ searchMentor, page }) {
  let endpoint = "http://localhost:3000/mentors?all=true";

  if (searchMentor) {
    endpoint += `&search=${searchMentor}`;
  }

  if (page) {
    endpoint += `&page=${page}`;
  }

  // fetch
  const { data } = await axios({
    url: endpoint,
    method: "GET",
  });

  return data;
}
