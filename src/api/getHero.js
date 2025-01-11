import axios from "axios";

const SERVER_URL="http://localhost:3000";

export const getHero = async () => {
    const { data } = await axios.get(
      `${SERVER_URL}/api/hero`,
    )
    return data.docs.pop()
  }