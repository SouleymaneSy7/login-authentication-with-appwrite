import React from "react";
import { account } from "../configs/appwriteConfig.ts";
import { ID } from "appwrite";

import { AuthContextType, User } from "../types";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  loading: true,
  register: async () => {},
  logIn: async () => {},
  signOut: async () => {},
  checkActiveSession: async () => {},
  deleteSessions: async () => {},
  errors: "",
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<string>("");

  const navigate = useNavigate();

  const checkCurrentUser = async () => {
    try {
      setLoading(true);

      const currentUser = await account.get();
      setIsAuthenticated(true);
      setUser(currentUser);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setUser(null);
      setIsAuthenticated(false);
      console.log("Check Current User Errors: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    checkCurrentUser();
  }, []);

  const checkActiveSession = async () => {
    setErrors("");

    try {
      const session = await account.getSession("current");
      return session !== null;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.code === 401) {
        return false;
      }

      console.log("Check Active Session Errors: ", error.message);
      setErrors(error.message);
    }
  };

  const deleteSessions = async () => {
    setErrors("");

    try {
      const sessions = await account.listSessions();

      await Promise.all(
        sessions.sessions.map(async (session) => {
          await account.deleteSession(session.$id);
        })
      );

      console.log("All sessions deleted successfully");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log("Delete Session Errors: ", error.message);
      setErrors(error.message);
    }
  };
  const register = async (
    email: string,
    password: string,
    fullName: string
  ) => {
    try {
      setErrors("");
      setLoading(true);

      await account.create(ID.unique(), email, password, fullName);
      await logIn(email, password);

      await checkCurrentUser();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log("Register Errors: ", error.message);
      setErrors(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logIn = async (email: string, password: string) => {
    try {
      setErrors("");
      setLoading(true);

      await account.createEmailPasswordSession(email, password);
      await checkCurrentUser();

      navigate("/success");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log("Log In Errors: ", error.message);
      setErrors(error.message);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setErrors("");
      setLoading(true);

      await account.deleteSession("current");
      setUser(null);

      setIsAuthenticated(false);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log("Sign Out Errors: ", error.message);
      setErrors(error.message);
    } finally {
      setLoading(false);
    }
  };

  const contextValue = {
    user,
    isAuthenticated,
    checkActiveSession,
    deleteSessions,
    loading,
    register,
    logIn,
    signOut,
    errors,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = (): AuthContextType => {
  const context: AuthContextType = React.useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }

  return context;
};
