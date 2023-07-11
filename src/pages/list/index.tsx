import { useEffect, useState } from "react";
import { db } from "@/firebase-config";
import { getDoc, collection, getDocs } from "@firebase/firestore";
import { Card } from "antd";

export default function List() {
  const uid = typeof window !== "undefined" ? localStorage.getItem("uid") : "";
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const userDataListRef = collection(db, "user", uid, "training");

    const getUserDataList = async () => {
      try {
        const data = await getDocs(userDataListRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);
        setDataList(filteredData);
      } catch (error) {
        console.log(error);
      }
    };

    getUserDataList();
  }, []);

  return (
    <div className={"py-5 px-4"}>
      <Card>리스트카드</Card>
    </div>
  );
}
