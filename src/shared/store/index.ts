export const getStorageData = (data: string) => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem(data) || "{}");
  }
}

export const toStoredData = (data: unknown) => JSON.stringify(data);

export const setStorageData = (key: string, data: unknown): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, toStoredData(data));
  }
};

export const removeStorageData = (key: string): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};
