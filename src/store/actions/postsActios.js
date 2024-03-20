export const GET_POSTS = "GET_POSTS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CATEGORY_PRODUCTS = "GET_CATEGORY_PRODUCTS"
export const UPDATE_CATEGORY = "UPDATE_CATEGORY"

export const getPosts = (category) => (dispatch) => {
  if(category != '') {
    fetch("https://fakestoreapi.com/products/category/"+category)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return dispatch({ type: GET_CATEGORY_PRODUCTS, payload: data });
      });
  }
  else {
    fetch("https://fakestoreapi.com/products")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return dispatch({ type: GET_POSTS, payload: data });
    });
  }
 
    
};
export const getCategories = () => (dispatch) => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return dispatch({ type: GET_CATEGORIES, payload: data });
      });
  };

  export const updateCategory = (cat) => (dispatch) => {
    return dispatch({ type: UPDATE_CATEGORY, selectedCategory: cat })
  };
