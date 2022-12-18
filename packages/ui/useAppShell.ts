import create from "zustand";
import { persist } from "zustand/middleware";
import { MODE } from "ui/models/appShell";

type Store = {
  mode: MODE;
  activePage: string;
  setMode: (mode: MODE) => void;
  setActivePage: (page: string) => void;
};

export const useAppShell = create<Store>()(
  persist<Store>(
    (set) => ({
      mode: MODE.LIGHT,
      activePage: "home",
      setMode: (mode) => set(() => ({ mode })),
      setActivePage: (page) => set(() => ({ activePage: page })),
    }),
    {
      name: "app-shell",
    }
  )
);
