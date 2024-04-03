export const getFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const setInLocalStorage = (key: string, model: string) => {
  return localStorage.setItem(key, model);
};

export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
