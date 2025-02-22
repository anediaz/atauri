import { LocalizedRoute } from "router/LocalizedRoute";
import { Route } from "react-router-dom";
import { BASE_PATH } from "./router.constants";

export interface RouteInfo {
    id: string;
    component: React.FC;
    path: string;
    children?: RouteInfo[];
}

export const buildRoute = (routeToBuild: RouteInfo) => <Route key={routeToBuild.id} path={`${BASE_PATH}${routeToBuild.path}`} element={<LocalizedRoute><routeToBuild.component /></LocalizedRoute>} />;

export const buildRoutes = (routesToBuild:RouteInfo[]) => {
  return routesToBuild.map((route) => {
    if(route.children) {
      return <Route path={`${BASE_PATH}${route.path}`} key={route.id}>
        <Route key={route.id} path={`${BASE_PATH}${route.path}`} element={<LocalizedRoute><route.component /></LocalizedRoute>} />
        {buildRoutes(route.children)}
      </Route>
    }
    else {
        return buildRoute(route);
    }
  })
}