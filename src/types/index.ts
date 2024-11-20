import { Models } from "appwrite";

export type ButtonPropsType = {
  children: React.ReactNode;
  type: "button" | "submit";
} & React.ComponentPropsWithoutRef<"button">;

export interface HeadingPropsType extends React.HTMLAttributes<HTMLElement> {
  level: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
}

export type InputsPropsType = {
  id?: string;
  type: "text" | "checkbox" | "password" | "email";
} & React.ComponentPropsWithoutRef<"input">;

export type VisuallyHiddenPropsType = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"span">;

export interface FormInputPropsType {
  ID: string;
  inputType: "text" | "email" | "password";
  inputPlaceholder: string;
  inputValue?: string;
  inputLabel: string;
  inputSetter: React.ChangeEventHandler<HTMLInputElement>;
  errors?: string | undefined;
}

export interface ProviderButtonPropsType {
  children: React.ReactNode;
  providerName: "google" | "github" | "discord";
}

export interface User extends Models.User<Models.Preferences> {}

export interface SuccessPagePropsType {
  user: User | null;
  signOut: () => Promise<void>;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  checkActiveSession: () => Promise<Models.Session | null>;
  deleteSessions: () => Promise<void>;
  loading: boolean;
  register: (
    email: string,
    password: string,
    full_name: string
  ) => Promise<void>;
  logIn: (
    email: string,
    password: string
  ) => Promise<Models.Session | undefined>;
  signOut: () => Promise<void>;
  errors: string;
}
