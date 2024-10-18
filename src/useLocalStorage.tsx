import { useState, useEffect } from "react";

function getStorageValue(key: string, defaultValue: any, dataType: string) {
    if (typeof window !== "undefined") {
        const saved: any = localStorage.getItem(key);
        const initial =  (dataType === 'json') ? JSON.parse(saved) : saved;

        return initial || defaultValue;
    }
    else {
        return defaultValue;
    }
}

export default function useLocalStorage (key: string, defaultValue: any, dataType: string)  {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue, dataType);
    });

    useEffect(() => {
        localStorage.setItem(key, ((dataType === 'json') ? JSON.stringify(value) : value));
    }, [key, value,dataType]);

    return [value, setValue];
};