import React from "react";
import { account } from "../configs/appwriteConfig";
import { ID, Models } from "appwrite";

import { AuthContextType, User } from "../types";

const AuthContext = React.createContext<AuthContextType>({
  user: null,
  loading: true,
  register: async () => {},
  logIn: async () => ({} as Models.Session),
  signOut: async () => {},
  errors: "",
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [errors, setErrors] = React.useState<string>("");

  const checkCurrentUser = async () => {
    try {
      setLoading(true);

      const currentUser = await account.get();
      setUser(currentUser);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    checkCurrentUser();
  }, []);

  const register = async (
    fullName: string,
    email: string,
    password: string
  ) => {
    try {
      setLoading(true);

      await account.create(ID.unique(), fullName, email, password);

      await logIn(email, password);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      setErrors(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logIn = async (email: string, password: string) => {
    try {
      setLoading(true);

      const session = await account.createEmailPasswordSession(email, password);
      await checkCurrentUser();
      return session;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      setErrors(error.message);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      setErrors(error.message);
    }
  };

  const contextValue = {
    user,
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

export const useAuthContext = (): AuthContextType => {
  const context: AuthContextType = React.useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }

  return context;
};
