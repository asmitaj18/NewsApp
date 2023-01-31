import axios from "axios";
import router from "@/router";

const instance = axios.create({
  baseURL: `http://newsapi.org/v2/`,
  timeout: 60000
});

instance.interceptors.response.use(null, error => {
  let path = '';
  let dataError = {
    message: "Somethong went wrong",
    title: "Error"
  };
  console.log("check", error.response)
  switch (error.response.status) {
    case 429 : 
      path = '/error';
      dataError.message = error.response.data.message
      break;
    default: path = '/error'; break;
  }
  router.push({path, name:"error", params: dataError})
});

export default instance;
