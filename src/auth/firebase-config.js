import { initializedApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

};

const app = initializedApp(firebaseConfig);
export const auth = getAuth(app);
