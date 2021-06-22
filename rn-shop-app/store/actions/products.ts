import { Product } from "@models/product";

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const deleteProduct = (producId) => {
  return { type: DELETE_PRODUCT, pid: producId };
};

export const createProduct = (product: Product) => {
  return { type: CREATE_PRODUCT, productData: product };
};

export const updateProduct = (product: Product) => {
  return { type: UPDATE_PRODUCT, pid: product.id, productData: product };
};
