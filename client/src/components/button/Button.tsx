import { StyledButton } from "./Button.styles";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button = ({ children, ...rest }: ButtonProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
