//React hooks are essentially functions that can be used in your components.
//Hooks e.g(useState of useEffect) need to follow the following rules:
//1. Hooks can only be used in functions components or in other hooks.
//2. Hooks can only be called on the top level of your component.
//3. Hooks should be called in the same order they are defined on every render

import { useState } from "react"

type Options = {
    method: string;
    headers: { [key: string]: string };
    body: string;
}
//If there are no dependencies, we assume that we fetch only on first render.

export const useEffect = (url: string, options: Options, dependencies?: [] ) => {
    const [response, setResponse] = useState({});
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
            const res = await fetch(url, options);
            const json = await res.json();
            setResponse(json);
        } catch (err) {
            setError(err);
        }
      };
    }, [url, options, dependencies]);
};
    