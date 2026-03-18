const isProduction = import.meta.env.PROD;

export const API_BASE_URL = isProduction ? "https://challenge-java-3b10.onrender.com/api" : "http://localhost:9000/api";

export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
  };

  const config: RequestInit = {
    ...options,
    headers: { ...defaultHeaders, ...options.headers },
  };

  try {
    const response = await fetch(url, config);
    console.log(response);
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message || `Erro HTTP: ${response.status} ${response.statusText}`);
    }

    if (response.status === 204) {
      return {} as T;
    }

    return await response.json() as T;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Erro desconhecido ao tentar conectar na API.");
  }
}
