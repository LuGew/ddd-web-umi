import React from 'react';
import styles from './login.css';
import LoginForm from '@/components/LoginForm';

export default function() {
  return (
    <div className={styles.login}>
      <LoginForm />
    </div>
  );
};
