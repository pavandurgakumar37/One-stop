const userAuthContext = createContext();

export function useUserAuth() {
  return useContext(userAuthContext);
}

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({});
  
  
    return (
      <userAuthContext.Provider
        value={{ user, logIn, signUp, logOut, googleSignIn }}
      >
        {children}
      </userAuthContext.Provider>
    );
  }