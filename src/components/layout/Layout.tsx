// src/components/Layout.tsx
import type { ReactNode } from "react";
import NavBar from "../Navigation/NavBar";
import ConnectSection from "../ConnectSection";
// import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <ConnectSection />
    </>
  );
}
