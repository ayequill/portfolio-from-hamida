import axios from "axios";
import qs from "qs";
import { flattenAttributes } from "./utils/utils";

const projectQuery = qs.stringify({
  populate: {
    thumbnail: {
      fields: ["url", "alternativeText"],
    },
    thumbnailGif: {
      fields: ["url", "alternativeText"],
    },
  },
});

const fetchProjects = async (path) => {
  const baseUrl = "http://localhost:1337";
  const url = new URL(path, baseUrl);
  url.search = projectQuery;
  console.log(url.href); 

  try {
    const res = await axios.get(url.href);
    const flattenedData = flattenAttributes(res.data)
    console.log(flattenedData);
    return flattenedData;
  } catch (err) {
    console.error(err);
  }
};

export { fetchProjects };
