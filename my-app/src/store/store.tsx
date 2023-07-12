import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
export const useStore = create<any>(
  persist(
    (set: any) => ({
      uid: "",
      userData: [],
      setUid: (state: any) => {
        set(() => ({ uid: state }));
      },
      setUserData: (state: any) => {
        set(() => ({ userData: state }));
      },
    }),
    { name: "uid", storage: createJSONStorage(() => sessionStorage) }
  )
);

export default useStore;
