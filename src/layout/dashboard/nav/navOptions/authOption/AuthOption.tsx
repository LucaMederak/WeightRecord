import React, { useState } from "react";
import Link from "next/link";
import { mutate } from "swr";
import axiosInstance from "@/utils/axiosInstance";

//styles
import * as Styled from "./AuthOption.styles";

//queries
import { useUser } from "@/queries/useUser";

//icons
import { FaUserAlt } from "react-icons/fa";

const AuthOption = () => {
  const { user } = useUser();

  const [logoutLoading, setLogoutLoading] = useState<boolean>();

  const logout = async () => {
    setLogoutLoading(true);
    try {
      const logout = await axiosInstance.delete("/api/sessions", {
        withCredentials: true,
      });

      mutate("/api/user", null);
    } catch (e) {
      console.log(e);
      setLogoutLoading(false);
    }
  };

  return (
    <Styled.AuthOptionWrapper>
      <Styled.PersonWrapper background={!user?.avatar}>
        {user?.avatar ? <img src={user?.avatar?.url} /> : <FaUserAlt />}

        <Styled.PersonInfoWrapper>
          <h2>{user?.name + " " + user?.lastName}</h2>
          <p>{user?.email}</p>
        </Styled.PersonInfoWrapper>
      </Styled.PersonWrapper>
      <Styled.Divider />
      <Styled.ListWrapper>
        <li>
          <Link href={"/dashboard/account"}>profil</Link>
        </li>
      </Styled.ListWrapper>
      <Styled.Divider />
      <Styled.SignoutButton onClick={logout}>wyloguj się</Styled.SignoutButton>
    </Styled.AuthOptionWrapper>
  );
};

export default AuthOption;
