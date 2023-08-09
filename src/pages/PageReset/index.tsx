import React from "react";
import AuthForm from "../../components/AuthForm";

const PageReset = () => {
  const handlePasswordRecovery = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <AuthForm
      title="Password "
      actionText="Recover Password"
      showRememberMe={false}
      showForgotPassword={true}
      showSignUpLink={false}
      useReCAPTCHA={true}
      onSubmit={handlePasswordRecovery}
    />
  );
};

export default PageReset;
