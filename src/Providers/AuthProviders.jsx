import { createContext, useState } from "react";

export const AuthContext = createContext(null)
const AuthProviders = ({children}) => {
    const [user, setuser] = useState(null)
    const [loading, setLoading] = useState(true)
    const authInfo = {

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;