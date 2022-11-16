import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoutes = ({  user }) => {
    const location = useLocation();

    if (!user) {
        return (
            <Navigate
                to={`/login?redirectTo=${encodeURIComponent(location.pathname)}`}
                replace
            />
        );
    }

    return (
        <div>
            <div>navbar</div>
            <Outlet />
        </div>
    );
};

export default PrivateRoutes;
