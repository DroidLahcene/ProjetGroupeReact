import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [


    index("routes/home.tsx"),
    route("playlist", "routes/playlist.tsx"),
    route("Desktop/:id", "routes/visuDesk.tsx"),
    route("Mobile", "routes/visuShort.tsx"),



] satisfies RouteConfig;
