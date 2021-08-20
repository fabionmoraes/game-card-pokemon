import React, { ButtonHTMLAttributes } from 'react';

import { Button } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const ButtonContainer: React.FC<ButtonProps> = ({
  children,
  loading,
  ...rest
}) => {
  return <Button {...rest}>{children}</Button>;
};

export default ButtonContainer;
