import { AxiosInstance } from "../../components/Api/api";

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

export const fetchProductsByCategory = (categoryCode, params = {}) => {
  return (dispatch, getState) => {
    AxiosInstance.get(`/products/category/${categoryCode}`, { params: params })
      .then((response) => {
        if (params.offset) {
          const currentProductList = getState().product.productList;
          const newProductList = response.data.products;
          const updatedProductList = [...currentProductList, ...newProductList];
          dispatch(setProductList(updatedProductList));
        } else {
          dispatch(setProductList(response.data.products));
        }
        dispatch(setTotalProductCount(response.data.total));
        dispatch(setPageCount(response.data.pages));
        dispatch(setFetchState("success"));
      })
      .catch((err) => {
        console.error(
          `Error fetching products for category ${categoryCode}:`,
          err
        );
        dispatch(setFetchState("error"));
      });
  };
};
