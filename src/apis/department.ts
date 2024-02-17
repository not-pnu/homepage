import axios from "axios";
import { Department } from "../@types/page";

export async function getDepartmentBoard(): Promise<Department[]> {
  try {
    const res = await axios.get("/api/department/board");
    if (res.data.type === "SUCCESS") {
      return res.data.data;
    } else {
      throw new Error(res.data.message);
    }
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
