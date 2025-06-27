import { Header } from '@/components/header';
import { LoginForm } from '@/components/login-form';
import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
