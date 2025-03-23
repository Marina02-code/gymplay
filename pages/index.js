import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { username, password });
    // Aqui você implementaria a lógica de autenticação
  };

  // Estilo para o background com a imagem
  const pageStyle = {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/workout.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed"
  };

  return (
    <>
      <Head>
        <title>GymPlay - Seu App de Exercícios</title>
        <meta name="description" content="Aplicativo de exercícios físicos para melhorar sua saúde e bem-estar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`} style={pageStyle}>
        <main className={styles.mainContainer}>
          <div className={styles.contentWrapper}>
            <h1 className={styles.title}>GymPlay</h1>
            <h2 className={styles.subtitle}>Transforme seu corpo, transforme sua vida</h2>
            
            <div className={styles.loginSection}>
              <div className={styles.loginCard}>
                <h2>Acesse sua conta</h2>
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                  <input 
                    type="text" 
                    placeholder="Nome de usuário" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required 
                  />
                  <input 
                    type="password" 
                    placeholder="Senha" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                  <button type="submit">Entrar</button>
                </form>
                <p className={styles.registerText}>
                  Não tem uma conta? <a href="#" className={styles.registerLink}>Cadastre-se</a>
                </p>
                <div className={styles.features}>
                  <div className={styles.feature}>
                    <span>✓</span> Treinos personalizados
                  </div>
                  <div className={styles.feature}>
                    <span>✓</span> Acompanhamento de progresso
                  </div>
                  <div className={styles.feature}>
                    <span>✓</span> Metas diárias
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} GymPlay - Todos os direitos reservados</p>
        </footer>
      </div>
    </>
  );
}