import AuthForm from "../../components/AuthForm";

interface PageLoginProps{
  onLogin:()=>void
}
const PageLogin = ({onLogin}:PageLoginProps) => {
  const handlePasswordRecovery = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="bg-slate-600">
      <AuthForm
        title="Sign in to your account"
        actionText="Sign in"
        showRememberMe={true}
        showForgotPassword={true}
        showSignUpLink={true}
        useReCAPTCHA={true}
        onSubmit={handlePasswordRecovery}
      />
    </div>
  );
};

export default PageLogin;
