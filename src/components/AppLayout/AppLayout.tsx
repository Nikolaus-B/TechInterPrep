import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default AppLayout;
