import React , {useContext} from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute1,
  SidebarRoute2,
  SidebarLinkR
} from "./SidebarElements";
import { UserContext } from '../../App';
const Sidebar = ({ isOpen, toggle }) => {
  const {state , dispatch} = useContext(UserContext);
  const RenderMenu = () => {
    if(!state){
      return(
        <>
          <SideBtnWrap>
            <SidebarRoute1 to="/signup">Sign Up</SidebarRoute1>
          </SideBtnWrap>
          <SideBtnWrap>
            <SidebarRoute2 to="/signin">Sign In</SidebarRoute2>
          </SideBtnWrap>
        </>
      )
    }
    else{
      return(
        <>
          <SideBtnWrap>
            <SidebarRoute1 to="/logout">Log Out</SidebarRoute1>
          </SideBtnWrap>
        </>
      )
    }
  }
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinkR to="/General-Safety" onClick={toggle}>
            General Safety
          </SidebarLinkR>
          <SidebarLinkR to="/Chemical-Safety" onClick={toggle}>
            Chemical Safety
          </SidebarLinkR>
          <SidebarLinkR to="/Controlled-Substances" onClick={toggle}>
            Controlled Substances
          </SidebarLinkR>
          <SidebarLinkR to="/Formaldehyde" onClick={toggle}>
            Formaldehyde
          </SidebarLinkR>
          <SidebarLinkR to="/Safe-Use-Of-Anesthetic-Gases" onClick={toggle}>
            Anesthetic Gases
          </SidebarLinkR>
        </SidebarMenu>
        <RenderMenu/>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
