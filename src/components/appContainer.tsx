import React from "react";
import AppFooter from "./appFooter";
import AppHeader from "./header";

const AppContainer = ({ children }: any) => {
  return (
    <div className="overflow-y-auto scrollbar-hidden">
      <AppHeader />
      <div className="lg:mt-16">{children}</div>
      <AppFooter />
    </div>
  );
};

export default AppContainer;
