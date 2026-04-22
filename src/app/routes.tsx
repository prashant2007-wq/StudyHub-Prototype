import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/dashboard/Home";
import UnifiedFeed from "./pages/dashboard/UnifiedFeed";
import Calendar from "./pages/dashboard/Calendar";
import Lectures from "./pages/dashboard/Lectures";
import Courses from "./pages/dashboard/Courses";
import Assignments from "./pages/dashboard/Assignments";
import AIAssistant from "./pages/dashboard/AIAssistant";
import Settings from "./pages/dashboard/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      { index: true, Component: Home },
      { path: "feed", Component: UnifiedFeed },
      { path: "calendar", Component: Calendar },
      { path: "lectures", Component: Lectures },
      { path: "courses", Component: Courses },
      { path: "assignments", Component: Assignments },
      { path: "ai-assistant", Component: AIAssistant },
      { path: "settings", Component: Settings },
    ],
  },
]);
