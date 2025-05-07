export const getStoredData = (data: string) => JSON.parse(data);

export const toStoredData = (data: unknown) => JSON.stringify(data);

export const setStorageData = (key: string, data: unknown): void => {
    localStorage.setItem(key, toStoredData(data));
};

export const removeStorageData = (key: string): void => {
    localStorage.removeItem(key);
};
