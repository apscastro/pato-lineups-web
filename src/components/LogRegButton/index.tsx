import React from 'react';
import Button from '@mui/material/Button';
import { styles } from './styles';

interface LogRegButtonProps {
  buttonName: string;
}

const LogRegButton: React.FC<LogRegButtonProps> = ({ buttonName }) => {
  return (
    <Button variant ="contained" sx={buttonName=="sign up" ? styles.signUpButton: styles.logInButton}>{buttonName}</Button>
  );
};

export default LogRegButton;
