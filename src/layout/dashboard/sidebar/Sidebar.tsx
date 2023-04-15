import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";
import { DashboardView } from "../DashboardLayout";
import axiosInstance from "@/utils/axiosInstance";

//icons
import { FaBars, FaHome, FaWeight } from "react-icons/fa";

//components
import Image from "next/image";
import ReactLoading from "react-loading";
import Button from "@/components/button/Button";

//animations
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

//assets
import Logo from "@/assets/logo-white.svg";
import LogoIcon from "@/assets/logo-icon-white.svg";

//styles
import * as Styled from "./Sidebar.styles";

const links = [
  {
    id: 1,
    name: "Strona główna",
    href: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    name: "Pomiary",
    href: "measurements",
    icon: <FaWeight />,
  },
];

const Sidebar = ({
  changeView,
  view,
}: {
  changeView: () => void;
  view: DashboardView;
}) => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>();

  const logout = async () => {
    setLoading(true);
    try {
      const logout = await axiosInstance.delete("/api/sessions", {
        withCredentials: true,
      });

      mutate("/api/user", null);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <Styled.SidebarWrapper>
      <Styled.SidebarLogoWrapper>
        <AnimatePresence>
          {view === "default" ? (
            <Image src={Logo} alt="WeightRecord Logo" width={160} height={50} />
          ) : (
            <RolledUpLogo view={view} changeView={changeView} />
          )}
        </AnimatePresence>

        <Styled.Burger onClick={() => setBurgerOpen(!burgerOpen)}>
          <FaBars />
        </Styled.Burger>

        <Styled.IconButton view={view} onClick={changeView}>
          <FaBars />
        </Styled.IconButton>
      </Styled.SidebarLogoWrapper>

      <Styled.SidebarLinksWrapper>
        {links.map((link) => (
          <Styled.LinkWrapper
            href={`/dashboard/${link.href}`}
            key={link.id}
            active={router.pathname.includes(link.href)}
            view={view}
          >
            {link.icon}

            <AnimatePresence>
              {view === "default" && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {link.name}
                </motion.span>
              )}
            </AnimatePresence>
          </Styled.LinkWrapper>
        ))}
      </Styled.SidebarLinksWrapper>

      <AnimatePresence>
        {burgerOpen && (
          <Styled.MobileNavWrapper
            data-testid="burger-open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {links.map((link) => (
              <Styled.LinkWrapper
                view={view}
                active={router.pathname.includes(link.href)}
                href={link.href}
                key={link.id}
                onClick={() => setBurgerOpen(false)}
              >
                {link.name}
              </Styled.LinkWrapper>
            ))}
            <Button
              size="small"
              onClick={logout}
              variant={loading ? "disabled" : "primary"}
            >
              {loading ? (
                <ReactLoading
                  type={"spin"}
                  color={"white"}
                  height={20}
                  width={20}
                />
              ) : (
                "Wyloguj się"
              )}
            </Button>
          </Styled.MobileNavWrapper>
        )}
      </AnimatePresence>
    </Styled.SidebarWrapper>
  );
};

const RolledUpLogo = ({
  changeView,
  view,
}: {
  changeView: () => void;
  view: DashboardView;
}) => {
  const [logoActive, setLogoActive] = useState(false);

  return (
    <Styled.RolledUpLogoWrapper
      onMouseEnter={() => setLogoActive(true)}
      onMouseLeave={() => setLogoActive(false)}
    >
      <Image
        src={LogoIcon}
        alt="WeightRecord Logo"
        fill
        style={{ objectFit: "contain" }}
      />

      <AnimatePresence>
        {logoActive && (
          <Styled.IconButtonRolled
            view={view}
            onClick={changeView}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FaBars />
          </Styled.IconButtonRolled>
        )}
      </AnimatePresence>
    </Styled.RolledUpLogoWrapper>
  );
};

export default Sidebar;
