import ActionTypes from '../actions/ActionTypes';


const initialState = {
  isSuccessful: false,
  isEditSuccessful: false,
  isArticleDeleted: false,
  errors: {},
};

const articleEditorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_ARTICLE_FALIURE:
      return {
        ...state,
        isSuccessful: false,
        errors: action.payload,
      };
    case ActionTypes.CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
        isSuccessful: true,
      };
    case ActionTypes.EDIT_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
        isEditSuccessful: true,
      };
    case ActionTypes.EDIT_ARTICLE_FALIURE:
      return {
        ...state,
        errors: action.payload,
        isEditSuccessful: false,
      };
    case ActionTypes.DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        message: action.payload,
        isArticleDeleted: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default articleEditorReducer;
