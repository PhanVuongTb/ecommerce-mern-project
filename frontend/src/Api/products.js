import instance from './instance';

export const listProduct = () => {
    const url = `products`;
    return instance.get(url);
}

export const readProduct = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
}

export const addProduct = (product) => {
    const url = "/products";
    return instance.post(url, product)
};

export const updateProduct = (product) => {
    const url = `/products/${product._id}`;
    return instance.put(url, product);
}

export const removeProduct = (id) => {
    const url = `products/${id}`;
    return instance.delete(url);
}