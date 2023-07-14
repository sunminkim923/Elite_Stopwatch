import { useRouter } from "next/router";
import useStore from "@/store/store";
import { useEffect, useState } from "react";
import { Card } from "antd";

export default function UserDataInfo() {
  const userInfoStore: any = useStore();
  const [mounted, setMounted] = useState<boolean>(false);

  const [detailInfo, setDetailInfo] = useState({});
  const [setList, setSetList] = useState([]);

  useEffect(() => {
    setMounted(true);
    const data: any = userInfoStore?.userDataDetail;

    setDetailInfo(data);
    setSetList(Object.values(data).filter((data) => Array.isArray(data)));
  }, []);

  console.log(detailInfo);

  return (
    mounted && (
      <>
        <div className={"py-6 px-4"}>
          {setList?.map((data, index) => (
            <Card className={"mt-4 border-2 shadow-lg"} key={index}>
              <div className={"text-[16px] font-bold"}>{index + 1} SET</div>
              {/*<div>stopwatchLap : 0번째 데이터</div>*/}
              {/*<div>stopwatchTotal : 1번째 데이터</div>*/}

              {data.map((item, index) => (
                <div className={"mt-2 flex font-bold"}>
                  <div className={"w-[30%]"}>
                    {detailInfo?.stopwatchLap * (index + 1)}m
                  </div>
                  <div className={"w-[40%]"}>00:22.86</div>
                  <div className={"w-[30%]"}>22.86</div>
                </div>
              ))}
            </Card>
          ))}
        </div>
      </>
    )
  );
}
