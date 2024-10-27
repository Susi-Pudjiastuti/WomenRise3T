import axios from "axios";

// fetch mentor
export async function fetchMentors({ searchMentor }) {
  let endpoint = "http://localhost:3000/mentors?all=true";

  if (searchMentor) {
    endpoint += `&search=${searchMentor}`;
  }

  // fetch
  const { data } = await axios({
    url: endpoint,
    method: "GET",
  });

  return data.data;
}
