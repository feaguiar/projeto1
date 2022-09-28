import GlobalContext from "./GlobalContext";
import useGlobalContextProvider from "../hooks/useGlobalContextProvider";

function GlobalContextProvider(props) {
    const valueProvider = useGlobalContextProvider();

    return (
        <GlobalContext.Provider value={valueProvider} >{props.children}</GlobalContext.Provider>
    )
}

export default GlobalContextProvider;