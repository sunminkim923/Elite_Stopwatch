import useStore from "@/store/store";
import { Card } from "antd";
import dayjs from "dayjs";

export default function List() {
  const userInfoStore: any = useStore();

  console.log(userInfoStore?.userData);

  const getStopwatchRaw = (data: any) => {
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
      {userInfoStore?.userData?.map((data: any) => (
        <Card className={"mt-4 border-2 shadow-lg"}>
          <div className={"text-[16px] font-bold"}>
            {dayjs(data.recordDate.seconds * 1000).format(
              "YYYY년 MM월 DD일 HH:mm:ss"
            )}
          </div>
          <div className={"mt-2 text-[20px] font-bold text-blue-700"}>
            {getStopwatchRaw(data.stopwatchRaw)}
          </div>
          <div className={"mt-2 text-[20px] font-bold"}>
            {data?.stopwatchLap}m / {data?.stopwatchTotal}m
          </div>
        </Card>
      ))}
    </div>
  );
}
