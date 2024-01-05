import { AxiosInstance } from "../../components/Api";

export const setProductList = (productList) => ({
  type: "SET_PRODUCTS",
  payload: productList,
});

export const setTotalProductCount = (total) => ({
  type: "SET_TOTAL_PRODUCT_COUNT",
  payload: total,
});

export const setPageCount = (count) => ({
  type: "SET_PAGE_COUNT",
  payload: count,
});

export const setActivePage = (page) => ({
  type: "SET_ACTIVE_PAGE",
  payload: page,
});

export const setFetchState = (fetchState) => ({
  type: "SET_FETCH_STATE",
  payload: fetchState,
});

export const fetchProduct = (params = {}) => {
  return (dispatch, getState) => {
    AxiosInstance.get("/products", { params: params })
      .then((response) => {
        if (params.offset) {
          const currentProductList = getState().product.productList;
          const newProductList = response.products;
          const updatedProductList = [...currentProductList, ...newProductList];
          dispatch(setProductList(updatedProductList));
        } else {
          dispatch(setProductList(response.products));
        }
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  };
};
