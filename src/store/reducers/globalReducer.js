import {
  SET_CATEGORIES,
  SET_LANGUAGE,
  SET_ROLES,
  SET_THEME,
} from "../actions/globalAction";

const globalInitialState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};

export function globalReducer(state = globalInitialState, action) {
  switch (action.type) {
    case "SET_ROLES":
      return { ...state, roles: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    default:
      return state;
  }
}

//- roles: {Object Array}
//- categories: {Object Array}
//- theme: {String}
//- language: {String}
