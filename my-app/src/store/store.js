import create from "zustand";

const useStore = create((set) => ({
  uid: "",
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
}));

export default useStore;
