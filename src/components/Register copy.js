import { useState, useEffect } from "react";
import styles from "../index.module.css"
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    // マウント処理など記述
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const formData = {
        email,
        password,
        nickname // nickname フォームデータに含める
      };

      const req = {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(formData)
      };

      // テストで使って良い奴っぽい。これをbackendからのJSONに変更したらいいっぽい
      const apiUrl = 'https://jsonplaceholder.typicode.com/users';
      // backendに投げて登録してもらって ok を throw してもらう必要がある

      const res = await fetch(apiUrl, req);
      if (!res.ok) {
        throw new Error('Registrain failed');
      }

      const data = await Response.json();
      console.log('Registration successful!', data);
      // トークンの保存処理(nickname を文字列としてローカルストレージに保存)
      localStorage.setItem('nickname', JSON.stringify(nickname));
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  const handeleRegiser = () => {
    // Registerボタンが押下されたときの処理を記述
    fetchData();
    navigate('/login'); // 登録後にログインページへリダイレクト
  };

  return (
    <div className={styles['box']}>
      <h2>Register(新規登録)</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <input
          type="text"
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)} />
        <button type="button" onClick={handeleRegiser}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;