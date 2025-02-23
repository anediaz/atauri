import { Route } from "react-router-dom";
import { BASE_PATH } from "./router.constants";

export interface RouteInfo {
    id: string;
    component: React.FC;
    path: string;
    children?: RouteInfo[];
}

export const buildRoute = (routeToBuild: RouteInfo) => <Route key={routeToBuild.id} path={`${BASE_PATH}${routeToBuild.path}`} element={<routeToBuild.component />} />;

export const buildRoutes = (routesToBuild:RouteInfo[]) => {
  return routesToBuild.map((route) => {
    if(route.children) {
      return <Route path={`${BASE_PATH}${route.path}`} key={route.id}>
        <Route key={route.id} path={`${BASE_PATH}${route.path}`} element={<route.component />} />
        {buildRoutes(route.children)}
      </Route>
    }
    else {
        return buildRoute(route);
    }
  })
}