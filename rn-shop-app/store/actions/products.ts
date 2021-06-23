import { Product } from "@models/product";

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const SET_PRODUCTS = "SET_PRODUCTS";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://rn-complete-guide-dcf3a-default-rtdb.firebaseio.com/products.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();
      const loadedProducts = [];

      for (const key in resData) {
        const newProduct: Product = {
          id: key,
          ownerId: "u1",
          title: resData[key].title,
          imageUrl: resData[key].imageUrl,
          price: resData[key].price,
          description: resData[key].description,
        };
        loadedProducts.push(newProduct);
      }
      dispatch({ type: SET_PRODUCTS, products: loadedProducts });
    } catch (err) {
      throw err;
    }
  };
};

export const deleteProduct = (producId) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://rn-complete-guide-dcf3a-default-rtdb.firebaseio.com/products/${producId}.json`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    dispatch({ type: DELETE_PRODUCT, pid: producId });
  };
};

export const createProduct = (product: Product) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://rn-complete-guide-dcf3a-default-rtdb.firebaseio.com/products.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: product.title,
          imageUrl: product.imageUrl,
          price: product.price,
          description: product.description,
        }),
      }
    );

    const resData = await response.json();
    product.id = resData.name;
    dispatch({ type: CREATE_PRODUCT, productData: product });
  };
};

export const updateProduct = (product: Product) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://rn-complete-guide-dcf3a-default-rtdb.firebaseio.com/products/${product.id}.json`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: product.title,
          imageUrl: product.imageUrl,
          description: product.description,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    dispatch({ type: UPDATE_PRODUCT, pid: product.id, productData: product });
  };
};
