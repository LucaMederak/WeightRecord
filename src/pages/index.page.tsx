import React from "react";
import { useRouter } from "next/router";

//components
import Image from "next/image";
import SectionContainer from "@/components/container/SectionContainer";
import Button from "@/components/button/Button";

//assets
import LogoDark from "@/assets/logo-dark.svg";

export default function Home() {
  const router = useRouter();
  return (
    <SectionContainer>
      <Image src={LogoDark} alt="WeightRecord logo" width={200} height={40} />
      <Button onClick={() => router.push("/auth/login")}>
        Przejdź do strony logowania
      </Button>
    </SectionContainer>
  );
}
