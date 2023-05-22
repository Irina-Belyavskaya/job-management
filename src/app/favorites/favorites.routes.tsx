import React, { FC, PropsWithChildren, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

const Suspended: FC<PropsWithChildren & { element: any }> = ({ element: Element }) => {
  return (
    <Suspense fallback={<div />}>
      <Element />
    </Suspense>
  );
};

// ======= pages ======= //
const FavoritesPage = React.lazy(() => import("app/favorites/favorites.page"));

const FavoritesRoutes: FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Suspended element={FavoritesPage} />} />

      {/* DEFAULT */}
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  );
};

export default FavoritesRoutes;