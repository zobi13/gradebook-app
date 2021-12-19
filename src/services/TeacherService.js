import HttpService from "./HttpService";

class TeacherService extends HttpService {
  getAll = async () => {
    const { data } = await this.client.get("/teachers");
    return data;
  };

  get = async (id) => {
    const { data } = await this.client.get(`/teachers/${id}`);
    return data;
  };

//   add = async (newGradebook) => {
//     const { data } = await this.client.post("/gradebook", newGradebook);
//     return data;
//   };
}

const teacherService = new TeacherService();
export default teacherService;
