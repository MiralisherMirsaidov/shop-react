import client from "./Client";

class ProductsAypi {
  async getUsers() {
    let response = await client({ url: "/users", method: "GET" })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }

  async getAllProducts() {
    let response = await client
      .get("/products")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    return response;
  }

  async searchProducts(search) {
    let response = await client
      .get(`/products/search?q=${search}`)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    return response;
  }

  async getAllCategories() {
    let response = await client
      .get("/products/categories")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    return response;
  }

  async getSearchCategories(params) {
    let response = await client
      .get(`/products/category/${params}`)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    return response;
  }

  async getProductsLimit(params) {
    let response = await client
      .get(`/products?limit=${params}`)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    return response;
  }

  async getSingleProduct(params) {
    let response = await client
      .get(`products/${params}`)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    return response
    
  }
}



export default new ProductsAypi;