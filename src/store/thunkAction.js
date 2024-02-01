// productActions.js
import { AxiosInstance } from "../../components/Api/api";
import {
  setFetchState,
  setPageCount,
  setProductList,
  setTotalProductCount,
} from "./actions/productAction";

// ...

// Yeni fonksiyon
export const fetchProductsByCategory = (categoryCode, params = {}) => {
  return (dispatch, getState) => {
    dispatch(setFetchState("loading")); // Veri çekme durumunu güncelle

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
        dispatch(setFetchState("success")); // Başarılı veri çekme durumunu güncelle
      })
      .catch((err) => {
        console.error(
          `Error fetching products for category ${categoryCode}:`,
          err
        );
        dispatch(setFetchState("error")); // Hata durumunu güncelle
      });
  };
};
