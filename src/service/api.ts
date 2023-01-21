import axios, {AxiosError} from "axios";

class Api {
  init() {
    this.setBaseURL();
  }

  setBaseURL() {
    const api = axios.create({
      //baseURL: "http://localhost:8081",
      baseURL: "https://api-recados-growdev.vercel.app",
      headers: {
        "Content-type": "application/json",
      },
    });
    return api;
  }

  async doGet(url: string) {
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error.response;
      }
    }
  }

  async doPost(body: object) {
    try {
      const response = await axios.post("/users", body);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error.response;
      }
    }
  }

  async doPut(url: string, body: object) {
    try {
      const response = await axios.put(url, body);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error.response;
      }
    }
  }

  async doDelete(url: string) {
    try {
      const response = await axios.delete(url);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error.response;
      }
    }
  }
}

const instace = new Api();
export default instace;
