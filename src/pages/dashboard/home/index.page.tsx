import React from "react";
import { useRouter } from "next/router";

//icons
import { FaUserPlus, FaWeight } from "react-icons/fa";

//styles
import * as Styled from "./Home.styles";

const Home = () => {
  const router = useRouter();

  return (
    <Styled.ListWrapper>
      <Styled.ItemWrapper onClick={() => router.push(`/dashboard/clients/new`)}>
        <FaUserPlus />
        dodaj klienta
      </Styled.ItemWrapper>
      <Styled.ItemWrapper
        onClick={() => router.push(`/dashboard/measurements/new`)}
      >
        <FaWeight />
        dodaj pomiar
      </Styled.ItemWrapper>
    </Styled.ListWrapper>
  );
};

export default Home;
