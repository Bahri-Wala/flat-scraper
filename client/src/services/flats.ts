import axios from "axios";

export const getAllFlats = async () =>
  await axios.get("http://localhost:8001/flats/");
