export function request(URL, method, header, body, formData) {
  const headers = {
    ...header,
  };
  return fetch(URL, {
    method,
    headers,
    body: body ? JSON.stringify(body) : formData,
  });
}
