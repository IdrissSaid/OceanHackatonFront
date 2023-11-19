import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/account/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });

      if (response.ok) {
        console.log('Authentification réussie !');
        navigate('/dashboard');
      } else {
        console.log('Échec de l\'authentification');
      }
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la requête :', error);
    }
  };

  return (
    <div className="bg-ConnectBg h-screen flex flex-col items-center justify-start">
      <h2 className="text-4xl font-bold text-white mb-32 mt-32">Zot A Vie</h2>
      <div className="login-container bg-white w-1/4 h-1/2 rounded-lg shadow-lg flex flex-col items-center justify-between pb-8">
        <div className="mt-4">
          <h2 className="text-3xl font-bold text-black-500 mb-1">Connexion Admin</h2>
        </div>
        <div className="input-container w-3/4">
          <label className="block font-bold mb-2">Identifiant :</label>
          <input
            type="text"
            placeholder="Entrez votre identifiant"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border rounded"
          />
        </div>
        <div className="input-container w-3/4">
          <label className="block font-bold mb-2">Mot de passe :</label>
          <input
            type="password"
            placeholder="Entrez votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="w-3/4">
          <button
            onClick={handleLogin}
            style={{ backgroundColor: '#B4CC04' }}
            className="hover:bg-green-600 text-white p-3 border rounded shadow-md w-full"
          >
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
