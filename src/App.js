import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./componets/Main";
import { ThemeProvider } from "@mui/styles";
import PrivateRoutes from "./componets/Common/PrivateRoutes";
import theme from "./componets/Styles/theme";
import store from "./store";
import RegisterForm from "./componets/Common/RegisterForm";
import RecoverPass from "./componets/Common/RecoverPass";
import { Provider } from "react-redux";
import Login from "./componets/Pages/Login";

import s from "./App.module.scss";

function App() {
    const [user, setUser] = useState(false);

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <div className={s.App}>
                    <HashRouter>
                        <Routes>
                            <Route element={<PrivateRoutes user={user} />}>
                                <Route path="*" element={<Main />} />
                            </Route>
                            <Route
                                path="/login"
                                element={
                                    <Login
                                        onLogin={(state) => {
                                            setUser(state);
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
        </Provider>
    );
}

export default App;
