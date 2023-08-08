import { useState, useEffect } from 'react';

function useCheckLogin(): boolean {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  function checkLogin() {
    setIsLogged(JSON.parse(sessionStorage.getItem("isLogged") as string) || false);
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return isLogged;
}

export default useCheckLogin;
