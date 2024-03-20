import { GET_POSTS, GET_CATEGORIES, GET_CATEGORY_PRODUCTS, UPDATE_CATEGORY } from "../actions/postsActios";

const initialState = {
  posts: [],
  categories: [],
  selectedCategory: '',
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };
    case GET_CATEGORIES:
      return { ...state, categories: action.payload };
      case GET_CATEGORY_PRODUCTS:
      return { ...state, posts: action.payload };
      case UPDATE_CATEGORY:
        return { ...state, selectedCategory: action.selectedCategory };
    default:
      return state;
  }
};
