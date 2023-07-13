import { Button, Input } from "antd";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth, db } from "@/config/firebase-config";
import { ChangeEvent, useState } from "react";
import useStore from "@/store/store";
import { collection, getDocs } from "@firebase/firestore";

export default function Home() {
  const [email, setEmail] = useState("player2@gmail.com");
  const [password, setPassword] = useState("!12345qwert");

  const userInfoStore: any = useStore();

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const login = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      await getUserDataList(result?.user?.uid);
      userInfoStore?.setUid(result?.user?.uid);
    } catch (error) {
      console.log(error, "error");
      alert("로그인에 실패하였습니다\n아이디와 비밀번호를 확인해주세요");
    }
  };

  const getUserDataList = async (uid: string) => {
    try {
      const userInfoList = collection(db, "user");
      const userDataList = collection(db, "user", uid, "training");

      const userInfo = await getDocs(userInfoList);
      const userData = await getDocs(userDataList);

      // 로그인한 유저 정보
      const filteredUserInfo = userInfo?.docs
        .map((doc) => ({
          ...doc.data(),
        }))
        .filter((data) => data.userUID === uid);

      // 유저 기록 리스트
      const filteredUserData = userData?.docs
        ?.map((doc) => ({
          ...doc.data(),
        }))
        .reverse();

      userInfoStore.setUserData(filteredUserData);

      if (!filteredUserInfo?.at(0)?.isTester) {
        alert("허가된 계정이 아닙니다.\n관리자에게 문의해주세요.");
      } else {
        location.href = "/list";
      }
    } catch (error) {
      console.log(error);
    }
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
