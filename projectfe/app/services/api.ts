// services/api.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiFetch = (path: string, options?: RequestInit) =>
  fetch(`${API_URL}${path}`, {
    ...options,
    credentials: 'include',
  });
