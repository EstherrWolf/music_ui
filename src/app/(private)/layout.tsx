"use client"

import Link from "next/link";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const isAuthenticated = (): boolean => {
  if (typeof window !== 'undefined') {
    return !!localStorage.getItem("theme");
  }
  return false
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  if (!isAuthenticated()) {
    return <Link href={'/login'} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
