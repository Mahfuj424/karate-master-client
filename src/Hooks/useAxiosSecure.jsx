import axios from "axios";

const axiosSecure = axios.create({
     baseURL: `https://martial-arts-server-blush.vercel.app/`
})

const useAxiosSecure = () => {
     return [axiosSecure]
}

export default useAxiosSecure;