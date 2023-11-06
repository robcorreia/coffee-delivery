import { LayoutContainer } from "./styles";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <h2>header</h2>
      <Outlet />
    </LayoutContainer>
  );
}
