import { baseURL } from "./baseUrl";



export const serverMutation = async (path, method, data) => {
  //   console.log(data);

  const res = await fetch(`${baseURL}${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteMutation = async (path) => {
  const res = await fetch(`${baseURL}${path}`, {
    method: 'DELETE',
  });
  return res.json();
};

export const serverFetch = async (path) => {
  const res = await fetch(`${baseURL}${path}`, {
    cache: 'no-store',
  });
  const contentType = res.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return res.json();
  } else {
    // If it's not JSON, throw an error or return null to avoid the '<' crash
    const text = await res.text();
    console.error("serverFetch received non-JSON:", text.substring(0, 100));
    return null;
  }
};