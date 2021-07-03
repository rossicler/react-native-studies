export const getIdText = (id) => {
  let idText = "#";
  for (let i = 0; i < 3 - id.toString().length; i++) {
    idText += "0";
  }
  return idText + id;
};
