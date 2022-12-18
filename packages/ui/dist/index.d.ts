import * as zustand_middleware from 'zustand/middleware';
import * as zustand from 'zustand';
import { MODE } from 'ui/models/appShell';
import React from 'react';

type Store = {
    mode: MODE;
    activePage: string;
    setMode: (mode: MODE) => void;
    setActivePage: (page: string) => void;
};
declare const useAppShell: zustand.UseBoundStore<Omit<zustand.StoreApi<Store>, "persist"> & {
    persist: {
        setOptions: (options: Partial<zustand_middleware.PersistOptions<Store, Store>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: Store) => void) => () => void;
        onFinishHydration: (fn: (state: Store) => void) => () => void;
        getOptions: () => Partial<zustand_middleware.PersistOptions<Store, Store>>;
    };
}>;

interface ShellProps {
    title: string;
    children: React.ReactNode;
}
declare const Shell: React.FunctionComponent<ShellProps>;

export { Shell, useAppShell };
