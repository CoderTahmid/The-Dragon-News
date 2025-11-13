import {createContext, useEffect, useState} from "react";
import app from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
	const [user, setUser] = useState(null);

	const createNewUser = (email, passwrod) => {
		return createUserWithEmailAndPassword(auth, email, passwrod);
	};

	const logout = () => {
		return signOut(auth)
	}

	const userLogin = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	}

	const authInfo = {
		user,
		setUser,
		createNewUser,
		logout,
		userLogin,
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		})

		return () => {
			unsubscribe();
		}
	}, []);

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
