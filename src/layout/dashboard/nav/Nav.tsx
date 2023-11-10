import React from "react";

//styles
import * as Styled from "./Nav.styles";

//components
import AuthOption from "./navOptions/authOption/AuthOption";
import IconModal from "@/components/iconModal/IconModal";
import { FaUserAlt } from "react-icons/fa";

//services
import { getUser } from "@/services/user.service";

const Nav = () => {
  const { user } = getUser();

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
