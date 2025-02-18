import { BASE_URL } from "../constants";

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return response.json(); // Returning the response data
};
