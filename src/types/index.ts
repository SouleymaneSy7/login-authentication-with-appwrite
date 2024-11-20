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

export interface SuccessPagePropsType {
  user: { name: string } | null;
  signOut: () => Promise<void>;
}

export interface ProviderButtonPropsType {
  children: React.ReactNode;
  providerName: "google" | "github" | "discord";
}
