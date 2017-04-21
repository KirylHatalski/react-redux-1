const customMiddleware = store => next => action => {
  console.log('logger:', action);
  console.log('store:', store.getState());
  next(action)
}

export default customMiddleware
