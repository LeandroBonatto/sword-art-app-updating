import { useRef } from "react";

export const useInterval = (
    callback: () => void,
    timeInterval: number | null
) => {
    const savedCallBack = useRef(callback);
};