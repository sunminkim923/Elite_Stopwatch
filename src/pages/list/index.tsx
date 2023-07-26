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

  const onClickItem = async (data:any, index: any) => {
    userInfoStore.setUserDataDetail(data);
    await router.push(`/list/detail/${index}`);
  };


  return (
    mounted && (
      <>
        <div className={"py-6 px-4"}>
          {userInfoStore?.userData?.map((data: any, index: number) => (
            <Card
              className={"mt-4 border-2 shadow-lg"}
              onClick={() => onClickItem(data, index)}
              key={index}
            >
              <div className={"text-[16px] font-bold"}>
                  {data?.recordDateString}
              </div>
              <div className={"mt-2 text-[20px] font-bold text-blue-700"}>
                {getStopwatchRaw(data?.stopwatch?.stopwatchType)}
              </div>
              <div className={"mt-2 text-[20px] font-bold"}>
                {data?.stopwatch?.lapDistance}m / {data?.stopwatch?.totalDistance}m
              </div>
            </Card>
          ))}
        </div>
      </>
    )
  );
}
