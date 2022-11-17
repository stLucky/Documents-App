import type { Documents } from "./types/documents";

export const getDocuments = async (
  search?: string
): Promise<Documents.Response> => {
  const url = new URL(`${import.meta.env.VITE_APP_API_URL}/user/docs`);
  url.searchParams.set("search", `${search}`);
  const response = await fetch(url);

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
};
