// Importações necessárias
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'; // Importa estilos

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // Lógica de autenticação aqui
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <SafeAreaView style={styles.container}>
       <Text style={styles.label}>Login</Text>
      
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Digite seu email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Não tem cadastro? Cadastre-se aqui</Text>
    </SafeAreaView>
  );
};

export default LoginScreen;
