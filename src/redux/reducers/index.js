const initialState = {
  favorite: {
    companies: [],
  },
};

const mainReducer = function (state = initialState, action) {
  switch (action.type) {
    case "Add_To_Favorite":
      return {
        ...state,
        favorite: {
          ...state.favorite,
          companies: [...state.favorite.companies, action.payload],
        },
      };

    case "Remove_From_Favorite":
      return {
        ...state,
        favorite: {
          ...state.favorite,
          companies: state.favorite.companies.filter(
            (company) => company !== action.payload,
          ),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
