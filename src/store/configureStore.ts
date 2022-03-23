import prodStoreFactory from "./configureStore.prod";
import devStoreFactory from "./configureStore.dev";


const defaultStore = process.env.NODE_ENV==="production" ? prodStoreFactory : devStoreFactory;

export default defaultStore;
      

  