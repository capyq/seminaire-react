import React, {
    useRef,
    createContext,
    useContext,
    useCallback,
} from "react";
// FIXME : Remove this package after upgrade to React 18
import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector';
import { isEqual } from 'lodash'

export default function createFastContext<Store>(initialState: Store) {
    const useStoreData = (): {
        get: () => Store;
        set: (value: Partial<Store>) => void;
        subscribe: (callback: () => void) => () => void;
    } => {
        const store = useRef(initialState);

        const get = useCallback(() => store.current, []);

        const subscribers = useRef(new Set<() => void>());

        const set = useCallback((value: Partial<Store>) => {
            store.current = { ...store.current, ...value };
            subscribers.current.forEach(callback => callback());
        }, []);

        const subscribe = useCallback((callback: () => void) => {
            subscribers.current.add(callback);
            return () => subscribers.current.delete(callback);
        }, []);

        return {
            get,
            set,
            subscribe,
        };
    }

    type UseStoreDataReturnType = ReturnType<typeof useStoreData>;

    const StoreContext = createContext<UseStoreDataReturnType | null>(null);

    function Provider({ children }: { children: React.ReactNode }) {
        return (
            <StoreContext.Provider value={useStoreData()}>
                {children}
            </StoreContext.Provider>
        );
    }

    function useStore<SelectorOutput>(
        selector: (store: Store) => SelectorOutput,
    ): SelectorOutput {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const { get, subscribe } = useContext(StoreContext)!;
        const value = useSyncExternalStoreWithSelector(
            subscribe,
            get,
            get,
            selector,
            isEqual,
        );
        return value;
    }

    function useSetStore(): (setter: Partial<Store>) => void {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const { set } = useContext(StoreContext)!;
        return set;
    }

    return {
        Provider,
        useStore,
        useSetStore,
    };
}
