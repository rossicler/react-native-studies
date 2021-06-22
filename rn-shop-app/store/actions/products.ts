export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const deleteProduct = (producId) => {
  return { type: DELETE_PRODUCT, pid: producId };
};
