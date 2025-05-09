"use client"

import Link from "next/link";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("theme");
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  if (!isAuthenticated()) {
    return <Link href={'/login'} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
