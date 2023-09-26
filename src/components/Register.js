import React from "react";
import styles from "../index.module.css"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from "react-router-dom";

class Register extends React.Component {
  state = {
    id: 0,
    uname: '',
    email: '',
    age: 0,
    password: ''
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  submitFormAdd = e => {
    e.preventDefault();
    console.log(this.state);
    fetch("http://localhost:8989/regist", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        uname: this.state.uname,
        age: this.state.age,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(item => {
        // 送信が上手くいったらLoginページへ戻る処理を追加する
        if (!Array.isArray(item)) {
          console.log("failure");
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className={styles['box']} >
        <h2>Register(新規登録)</h2>
        <Form onSubmit={this.submitFormAdd}>
          <FormGroup>
            <Label for="uname">ユーザ名</Label>
            <Input type="text" name="uname" id="uname" onChange={this.onChange} />
            <Label for="age">年齢</Label>
            <Input type="text" name="age" id="age" onChange={this.onChange} />
            <Label for="email">メールアドレス</Label>
            <Input type="text" name="email" id="email" onChange={this.onChange} />
            <Label for="password">パスワード</Label>
            <Input type="password" name="password" id="password" onChange={this.onChange} />
          </FormGroup>
          <Button>
            Register
          </Button>
        </Form>
      </div>
    );
  }
};


export default Register;