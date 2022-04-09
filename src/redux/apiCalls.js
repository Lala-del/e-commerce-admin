import { useParams } from "react-router-dom";
import { publicRequest, userRequest } from "../requestMethods";
import { getProductStart, getProductFailure, getProductSuccess, deleteProductSuccess, deleteProductFailure, deleteProductStart, addProductStart, addProductSuccess, addProductFailure, updateProductSuccess, updateProductFailure, updateProductStart } from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";


export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post("/login", user)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}

export const getProducts = async (dispatch) => {
    dispatch(getProductStart())
    try {
        const res = await publicRequest.get("/products")
        dispatch(getProductSuccess(res.data))
    } catch (err) {
        dispatch(getProductFailure())
    }
}

export const deleteProduct = async (id, dispatch) => {

    dispatch(deleteProductStart())
    try {
        const res = await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id))
    } catch (err) {
        dispatch(deleteProductFailure())
    }
}

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart())
    try {
        const res = await userRequest.post(`/products`)
        dispatch(addProductSuccess(product))
    } catch (err) {
        dispatch(addProductFailure())
    }
}

export const updateProduct = async (product, dispatch) => {
    dispatch(updateProductStart())
    try {
        const res = await userRequest.post(`/products`)
        dispatch(updateProductSuccess(product))
    } catch (err) {
        dispatch(updateProductFailure())
    }
}
