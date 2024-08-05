import axios from "axios";
import { flattenAttributes } from "./utils/utils";



const fetchProjects = async (path) => {
  const baseUrl = "https://hamida-mahama.onrender.com/";
  // const baseUrl = "http://localhost:1337";

  const url = new URL(path, baseUrl);

  try {
    const res = await axios.get(url.href);
    const flattenedData = flattenAttributes(res.data);
    return flattenedData;
  } catch (err) {
    console.error(err);
  }
};



export { fetchProjects };
