import { useRouter } from "next/router";
import useStore from "@/store/store";
import { useEffect, useState } from "react";
import { Card } from "antd";

export default function UserDataInfo() {
  const router = useRouter();
  const userInfoStore: any = useStore();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <>
        <div className={"py-6 px-4"}>
          <Card className={"mt-4 border-2 shadow-lg"}>
            <div>1set</div>
            <div>stopwatchLap : 0번째 데이터</div>
            <div>stopwatchTotal : 1번째 데이터</div>
          </Card>
        </div>
      </>
    )
  );
}
