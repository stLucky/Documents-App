import type { Documents } from "./types/documents";

export const getDocuments = async (
  search?: string
): Promise<Documents.Response> => {
  const url = new URL("https://agile-sands-40710.herokuapp.com/user/docs");
  url.searchParams.set("search", `${search}`);
  const response = await fetch(url);

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
};
