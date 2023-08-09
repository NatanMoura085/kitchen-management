import { useState, useEffect } from "react";

interface UserData {
  username: string;
}

interface AuthState {
  user: UserData | null;
  isLoading: boolean;
}

const useAuth = (): AuthState => {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const login = (userData: UserData): void => {
    // Simulação de sucesso
    setUser(userData);
  };

  const logout = (): void => {
    setUser(null);
  };

  useEffect(() => {
    // Aqui você pode adicionar a lógica para verificar o status de autenticação
    // Exemplo: fazer uma chamada ao servidor para verificar se o usuário está autenticado
    // Simulação: definir um usuário após um pequeno atraso
    setTimeout(() => {
      setLoading(false);
      login({ username: "exampleUser" });
    }, 6000);
  }, []);

  return {
    user,
    isLoading,
    login,
    logout,
  };
};

export default useAuth;
