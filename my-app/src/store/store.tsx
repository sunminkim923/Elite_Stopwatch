import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
export const useStore = create<any>(
  persist(
    (set: any) => ({
      uid: "",
      setUid: (state: any) => {
        set(() => ({ uid: state }));
      },
    }),
    { name: "uid", storage: createJSONStorage(() => sessionStorage) }
  )
);

export default useStore;
