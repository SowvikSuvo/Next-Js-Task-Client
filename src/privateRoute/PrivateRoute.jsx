"use client";

import { AuthContext } from "@/components/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { useContext, useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      router.push(`/login?redirect=${pathname}`);
    }
  }, [user, loading, router, pathname]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <span className="loading loading-spinner loading-lg text-amber-500"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return null;
};

export default PrivateRoute;
