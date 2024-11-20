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
