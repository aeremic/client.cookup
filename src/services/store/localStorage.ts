export const getItemByKey = (key: string) => {
  return localStorage.getItem(key);
};

export const setItemByKey = (key: string, model: string) => {
  return localStorage.setItem(key, model);
};
