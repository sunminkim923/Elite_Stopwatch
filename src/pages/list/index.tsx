import { useEffect, useState } from "react";
import { db } from "@/firebase-config";
import { getDoc, collection, getDocs } from "@firebase/firestore";
import { Card } from "antd";
import dayjs from "dayjs";

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
        console.log(filteredData?.at(0));
        setDataList(filteredData);
      } catch (error) {
        console.log(error);
      }
    };

    getUserDataList();
  }, []);

  console.log(new Date(1686903462 * 1000));

  const getStopwatchRaw = (data) => {
    switch (data) {
      case 0:
        return "- Interval -";
      case 1:
        return "- Drill -";
      case 2:
        return "- Time Attack -";
      default:
        return "";
    }
  };

  return (
    <div className={"py-6 px-4"}>
      {dataList?.map((data: any) => (
        <Card className={"mt-4 border-2 shadow-lg"}>
          <div className={"text-lg font-bold"}>
            {dayjs(data.recordDate.seconds * 1000).format(
              "YYYY년 MM월 DD일 HH:mm:ss"
            )}
          </div>
          <div className={"mt-2"}>{getStopwatchRaw(data.stopwatchRaw)}</div>
          <div>stopwatchLap / stopwatchTotal</div>
        </Card>
      ))}

      <Card className={"mt-10"}>
        <div>1set</div>
        <div>stopwatchLap : 0번째 데이터</div>
        <div>stopwatchTotal : 1번째 데이터</div>
      </Card>
    </div>
  );
}
