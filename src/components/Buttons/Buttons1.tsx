import {
  StyledBtn,
  // StyledLinkBtn,
  // BackLinkBtn,
} from 'components/Buttons/Buttons';
import {ReactNode} from 'react'

interface ButtonProps {
  saved: boolean,
  children: ReactNode;
  onClick: () => void;
}

export const StyledBtn1 = (props: ButtonProps) => {
  return StyledBtn
}