import {Routes, Route} from 'react-router-dom';
import { paths } from 'routes';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { refresh } from '../../redux/auth/operations';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivedRoute';

const HomePage = lazy(() => import('../../pages/HomePage.jsx'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage.jsx'));
const LoginPage = lazy(() => import('../../pages/LoginPage.jsx'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage.jsx'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage.jsx'));

export const App = () => {
    
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();
  
    useEffect(() => {
      dispatch(refresh());
    }, [dispatch]);

    return isRefreshing 
                ? (<b>Refreshing user...</b>) 
                : <Routes>
                    <Route path={paths.HOME} element={<SharedLayout/>}>
                    
                        <Route index element={<HomePage/>}/>
                        
                        <Route path={paths.REGISTER} element={<RestrictedRoute redirectTo={paths.CONTACTS} component={<RegisterPage/>}/>}/>
                        <Route path={paths.LOGIN} element={<RestrictedRoute redirectTo={paths.CONTACTS} component={<LoginPage/>}/>}/>

                        <Route path={paths.CONTACTS} element={<PrivateRoute redirectTo={paths.LOGIN} component={<ContactsPage/>}/>}/>
                        
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Route>
                </Routes> 
}