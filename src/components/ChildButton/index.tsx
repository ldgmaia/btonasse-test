import { StyledButton } from "./styles";

interface ChildProps {
  text: string;
}

export default function ChildButton({text}: ChildProps) {
  return (
    <StyledButton>{text}</StyledButton>
  )
}
