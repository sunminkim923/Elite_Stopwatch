import { useRouter } from "next/router";
import useStore from "@/store/store";
import { useEffect, useState } from "react";
import { Card } from "antd";
import dayjs from "dayjs";

export default function UserDataInfo() {
  const userInfoStore: any = useStore();
  const [mounted, setMounted] = useState<boolean>(false);

  const [detailInfo, setDetailInfo] = useState({});
  const [setList, setSetList] = useState([]);

  useEffect(() => {
    setMounted(true);
    const data: any = userInfoStore?.userDataDetail;

    setDetailInfo(data);
    setSetList(userInfoStore?.userDataDetail?.recordData)

  }, []);


    function getRecordDiff (data:any, index: any) {
      if(index === 0) {
          return dayjs.unix(data[index] / 100).format("mm:ss.SSS")
      } else {
          const recordDiff = data[index] - data[index-1]
          return dayjs.unix(recordDiff / 100).format("mm:ss.SSS")
      }
    }

  return (
    mounted && (
      <>
        <div className={"py-6 px-4"}>
          {setList?.map((data: any, index: any) => (
            <Card className={"mt-4 border-2 shadow-lg"} key={index}>
              <div className={"text-[16px] font-bold"}>{data.set + 1} SET</div>
              {/*<div>stopwatchLap : 0번째 데이터</div>*/}
              {/*<div>stopwatchTotal : 1번째 데이터</div>*/}

              {data?.record?.map((item: any, index:any) => (
                <div className={"mt-2 flex font-bold"} key={index}>
                  <div className={"w-[30%]"}>
                    {detailInfo?.stopwatchLap * (index + 1)}m
                  </div>
                  <div className={"w-[40%]"}>
                      {dayjs.unix(item / 100).format("mm:ss.SSS")}
                  </div>
                  <div className={"w-[30%]"}>{getRecordDiff(data.record, index)}</div>
                </div>
              ))}
            </Card>
          ))}
        </div>
      </>
    )
  );
}
