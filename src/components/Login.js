import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../index.module.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // ログイン処理の実装
    if (email.trim() !== '' && password.trim() !== '') {
      // ログイン成功の場合、トークンを保存する処理を行う
      console.log("ログイン成功");
      // トークンをローカルストレージに保存
      localStorage.setItem('token', 'example_token');

      // ダッシュボードへリダイレクト
      navigate('/dashboard');
    } else {
      // ログイン失敗
      console.log("ログイン失敗");
    }
  };

  return (
    <div className={styles['box']}>
      <h2>Login</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;