import { useRoutes } from "react-router-dom";
import routeData from './Routes'

const Router = () => {
    const routes = useRoutes(routeData)

    return routes
}

export default Router