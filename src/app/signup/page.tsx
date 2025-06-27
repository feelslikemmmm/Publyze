import { Header } from '@/components/header';
import { SignupForm } from '@/components/signup-form';
import React from 'react';

const SignUpPage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
