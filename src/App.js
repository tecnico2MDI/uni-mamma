import React, {useState} from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import Main from "./componets/Main";
import { ThemeProvider } from '@mui/styles';
import s from  './App.module.scss';
import LoginForm from "./componets/Common/LoginForm";
import PrivateRoutes from "./componets/Common/PrivateRoutes";
import theme from "./componets/Styles/theme";
import RegisterForm from "./componets/Common/RegisterForm";
import RecoverPass from "./componets/Common/RecoverPass";


export const PATHS = {
    MAIN: "/",
};

function App() {
    const [user, setUser] = useState(false);
    return (
        <ThemeProvider theme={theme}>
            <div className={s.App}>
                <HashRouter>
                    <Routes >
                        <Route element={<PrivateRoutes user={user} />}>
                            <Route path={PATHS.MAIN} element={<Main />} />
                        </Route>
                        <Route
                            path="/login"
                            element={
                                <LoginForm
                                    onLogin={() => {
                                        setUser(true);
                                    }}
                                />
                            }
                        />
                        <Route path="/register" element={<RegisterForm />} />
                        <Route path="/recover-password" element={<RecoverPass />} />
                    </Routes>
                </HashRouter>
            </div>
        </ThemeProvider>
    );
}

export default App;
