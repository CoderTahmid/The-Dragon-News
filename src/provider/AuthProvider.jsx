import {createContext, useState} from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
	const [user, setUser] = useState(null)

	const createNewUser = (email, passwrod) => {
		return createUserWithEmailAndPassword(auth, email, passwrod);
	}

	const authInfo = {
		user,
		setUser,
		createNewUser
	};

	return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
