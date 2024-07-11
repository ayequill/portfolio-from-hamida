import axios from "axios";

// const getStrapiData = async () => {
//     try {
//         const res = await axios.get(`http://localhost:1337/api/project`)
//           return res.data
       
//     } catch (err) {
//         console.error(err);
//     }
// };

const fetchProjects = async () => {
    try {
        const res = await axios.get(`http://localhost:1337/api/works?populate[thumbnail][fields][0]=url&populate[thumbnail][fields][1]=alternativeText&populate[thumbnailGif][fields][0]=url&populate[thumbnailGif][fields][1]=alternativeText`)
        console.log(res)
        return res.data
    } catch (err) {
        console.error(err);
    }
}

export {fetchProjects};
