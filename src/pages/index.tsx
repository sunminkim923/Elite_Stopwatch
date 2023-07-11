import { Button, Input } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase-config";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("player2@gmail.com");
  const [password, setPassword] = useState("!12345qwert");

  const login = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      window.localStorage.setItem("uid", result?.user?.uid);
      location.href = "/list";
    } catch (error) {
      console.log(error, "error");
      alert("로그인에 실패하였습니다\n아이디와 비밀번호를 확인해주세요");
    }
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className={"min-h-screen flex items-center"}>
      <div className={"px-10 w-full"}>
        <div>아이디</div>
        <Input className={"mt-1 h-12"} value={email} onChange={onChangeEmail} />
        <div className={"mt-4"}>비밀번호</div>
        <Input
          className={"mt-1 h-12"}
          value={password}
          onChange={onChangePassword}
          type={"password"}
        />
        <Button
          className={"w-full mt-20 h-16 bg-gray-900 text-white text-xl"}
          onClick={login}
        >
          로그인
        </Button>
      </div>
    </div>
  );
}
