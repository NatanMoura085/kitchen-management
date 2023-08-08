import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold mb-4">404</h2>
        <p className="text-gray-600 text-lg mb-4">Página não encontrada</p>
        <img src="https://via.placeholder.com/150" alt="Error" className="mx-auto mb-4" />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Voltar para a página inicial
        </button>
      </div>
    </div>
  );
};

export default NotFound;
