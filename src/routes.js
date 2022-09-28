import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import useGlobalContext from './hooks/useGlobalContext';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

// function ProtectedRoutes({redirectTo}) {
//  const {token} = useGlobalContext();

//     return token ? <Outlet /> : <Navigate to={redirectTo} />;
// } 

function MainRoutes() {
    return (
        <Routes>

            <Route path='/' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            {/* <Route element={<ProtectedRoutes redirectTo='/'/>}> */}
            <Route path='/main' element={<Main />} />
            {/* </Route> */}
        </Routes>
    )
}

export default MainRoutes;