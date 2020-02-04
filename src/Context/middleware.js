// Middleware to bind dispatch with every component
// It will work like redux-thunk
export const applyMiddleware = dispatch => action => {
  dispatch(action);
};
