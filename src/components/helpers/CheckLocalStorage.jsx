export const checkLocalStorage = () => {
  let lcssv2token = null;
  try {
    lcssv2token = JSON.parse(localStorage.getItem("lcssv2token"));
  } catch (error) {
    lcssv2token = null;
  }

  return lcssv2token;
};
