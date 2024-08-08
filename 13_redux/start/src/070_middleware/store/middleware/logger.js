// Redux Middleware
const logger = (store) => {
    return (next) => {
      return (action) => {
        console.log(store.getState())
        next(action);
        // storeはaction後の状態
        console.log(store.getState())
      };
    };
};

export default logger;

