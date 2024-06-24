import { Suspense, lazy } from "react";

const LazyInventory = lazy(() => import("./Inventory"));

export const Inventory = (props) => (
  <Suspense fallback={<>Loading...</>}>
    <LazyInventory {...props} />
  </Suspense>
);
