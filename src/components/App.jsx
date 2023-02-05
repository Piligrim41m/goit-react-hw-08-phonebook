// import { AppBar } from "components/AppBar/AppBar";
// import { ContactPage } from "pages/contactsPage/contactsPage";
// import { HomePage } from "pages/homePage/homePage";
// import { LoginForm } from "pages/login/login";
// import { RegisterForm } from "pages/register/register";
import { refreshUser } from "auth/auth-operation";
import { getIsRefreshing } from "auth/auth-selector";
import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";
import { PrivatRoute } from "./privateRoute";
import { RestrictedRoute } from "./restrictedRoute";

const HomePage = lazy(() => import('pages/homePage/homePage'));
const ContactPage = lazy(() => import('pages/contactsPage/contactsPage'));
const RegisterPage = lazy(() => import('pages/register/register'));
const LoginPage = lazy(() => import('pages/login/login'))

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>User refreshing</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={
          <PrivatRoute redirectTo="/login" component={<ContactPage/>}/>
        } />
        <Route path="/register" element={
          <RestrictedRoute redirectTo="/contacts" component={<RegisterPage/>}/>
        } /> 
        <Route path="/login" element={
          <RestrictedRoute redirectTo="/contacts" component={<LoginPage/>}/>
        }/>
      </Route>

    </Routes>
    // <div>
    //   <AppBar>
    //     <Routes>
    //       <Route exact path="/" element={<HomePage/>}/>
    //       <Route path="/register" element={<RegisterForm />} />
    //       <Route path="/login" element={<LoginForm />} />
    //       <Route path="/contacns" element={<ContactPage/>}/>
    //     </Routes> 
    //   </AppBar>
    // </div>
  );
};
