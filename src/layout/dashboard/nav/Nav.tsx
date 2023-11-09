import { useUser } from "@/services/useUser";
import React from "react";

//styles
import * as Styled from "./Nav.styles";

//components
import AuthOption from "./navOptions/authOption/AuthOption";
import IconModal from "@/components/iconModal/IconModal";
import { FaUserAlt } from "react-icons/fa";

const Nav = () => {
  const { user } = useUser();

  return (
    <Styled.NavWrapper>
      <Styled.NavOptionsWrapper>
        <IconModal img={user?.avatar?.url} icon={<FaUserAlt />} background>
          <AuthOption />
        </IconModal>
      </Styled.NavOptionsWrapper>
    </Styled.NavWrapper>
  );
};

export default Nav;
