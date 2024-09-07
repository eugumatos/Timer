import { Eye, EyeSlash, Scroll, Timer } from "phosphor-react";
import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ManagementControlContext } from "../../contexts/ManagementControlContext";

import Logo from "../../assets/logo.svg";
import {
  Controls,
  HeaderContainer,
  ManagementCycleButtonBase,
} from "./Header.styles";

export function Header() {
  const { pathname } = useLocation();

  const {
    isManagementControlsVisible,
    onShowManagementControls,
    onHiddenManagementControls,
  } = useContext(ManagementControlContext);

  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <nav>
        {pathname === "/" && (
          <Controls>
            <ManagementCycleButtonBase
              type="button"
              onClick={() =>
                isManagementControlsVisible
                  ? onHiddenManagementControls()
                  : onShowManagementControls()
              }
            >
              {isManagementControlsVisible ? (
                <EyeSlash size={24} />
              ) : (
                <Eye color="#00875F" size={24} />
              )}
            </ManagementCycleButtonBase>
          </Controls>
        )}
        <NavLink to="/" title="Home">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
