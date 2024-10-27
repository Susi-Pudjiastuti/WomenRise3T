import axios from "axios";

// fetch mentor
export async function fetchMentors() {
  let endpoint = "http://localhost:3000/mentors";

  // fetch
  const { data } = await axios({
    url: endpoint,
    method: "GET",
  });

  return data.data;
}
