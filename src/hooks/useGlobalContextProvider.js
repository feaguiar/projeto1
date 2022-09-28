import { useLocalStorage } from 'react-use';

function useGlobalContextProvider() {
    const [token, setToken] = useLocalStorage('token');
    const [user, setUser, clearUser] = useLocalStorage('user');

    return {
        token, setToken, user, setUser, clearUser
    }
}

export default useGlobalContextProvider;