import { Button, Input } from "antd";
import { auth } from "@/firebase-config";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("player10@gmail.com");
  const [password, setPassword] = useState("!12345qwert");
  const [userData, setUserData] = useState(null);

  const login = async () => {
    try {
      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const { stsTokenManager, uid } = user;
      // setAuthInfo({ uid, email, authToken: stsTokenManager });
      // navigate('/');
      console.log(user);
    } catch ({ code, message }) {
      // alert(errorMessage[code]);
    }
  };

  async function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider 구글 설정

    try {
      const result = await signInWithPopup(auth, provider) // 팝업창 띄워서 로그인
        .then((data) => {
          setUserData(data.user); // user data 설정
          console.log(data); // console에 UserCredentialImpl 출력
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={"min-h-screen flex items-center"}>
      <div className={"px-10 w-full"}>
        <div>아이디</div>
        <Input className={"mt-1 h-12"} />
        <div className={"mt-4"}>비밀번호</div>
        <Input className={"mt-1 h-12"} />
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
