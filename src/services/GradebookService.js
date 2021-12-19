import HttpService from "./HttpService";

class GradebookService extends HttpService {
  getAll = async () => {
    const { data } = await this.client.get("/gradebooks");
    return data;
  };

  get = async (id) => {
    const { data } = await this.client.get(`/gradebooks/${id}`);
    return data;
  };

  add = async (newGradebook) => {
    const { data } = await this.client.post("/gradebooks/create", newGradebook);
    return data;
  };

  edit = async (id, gradebook) => {
    const { data } = await this.client.put(`/gradebooks/${id}/edit`, gradebook);
    return data;
  };

  delete = async (id) => {
    const { data } = await this.client.delete(`/gradebooks/${id}`);
    return data;
  };
}

const gradebookService = new GradebookService();
export default gradebookService;
