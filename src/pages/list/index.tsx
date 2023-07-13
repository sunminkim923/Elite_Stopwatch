import useStore from "@/store/store";
import { Card } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function List() {
  const router = useRouter();
  const userInfoStore: any = useStore();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const onClickItem = (index: any) => {
    router.push(`/list/detail/${index}`);
  };

  return (
    mounted && (
      <>
        <div className={"py-6 px-4"}>
          {userInfoStore?.userData?.map((data: any, index: number) => (
            <Card
              className={"mt-4 border-2 shadow-lg"}
              onClick={() => onClickItem(index)}
              key={index}
            >
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
      </>
    )
  );
}
