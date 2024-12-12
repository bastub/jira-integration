import axios from "axios";

const fetchApi = async () => {
  var URL = import.meta.env.VITE_baseURL + "/issuetypes";
  const response = await axios.get(URL);
  console.log(response.data);
  return response.data;
};

export { fetchApi };
