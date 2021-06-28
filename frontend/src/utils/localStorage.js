export const getItem = (item) =>
  localStorage && localStorage.getItem && localStorage.getItem(item);

export const removeItem = (item) =>
  localStorage && localStorage.removeItem && localStorage.removeItem(item);

export const setItem = (name, item) =>
  localStorage && localStorage.setItem && localStorage.setItem(name, item);
