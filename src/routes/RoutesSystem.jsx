import { devNavUrl } from "../components/helpers/functions-general";
import Roles from "../components/pages/developer/settings/users/roles/Roles";
import SystemLogin from "../components/pages/access/developer/SystemLogin";
import SystemForgotPassword from "../components/pages/access/developer/SystemForgotPassword";
import SystemCreatePassword from "../components/pages/access/developer/SystemCreatePassword";
import SystemUser from "@/components/pages/developer/settings/users/system/SystemUser";
export const routesSystem = [
  {
    path: `/${devNavUrl}/system/login`,
    element: <SystemLogin />,
  },

  {
    path: `/${devNavUrl}/system/reset-password`,
    element: <SystemForgotPassword />,
  },

  {
    path: `/${devNavUrl}/system/create-password`,
    element: <SystemCreatePassword />,
  },

  {
    path: `/${devNavUrl}/system/settings/users/roles`,
    element: <Roles />,
  },

  {
    path: `/${devNavUrl}/system/settings/users/system`,
    element: <SystemUser />,
  },
];
