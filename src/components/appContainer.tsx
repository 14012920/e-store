import React from "react";
import AppFooter from "./appFooter";
import AppHeader from "./header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AppContainer = ({ children }: any) => {
  return (
    <div className="overflow-y-auto scrollbar-hidden">
      <AppHeader />
      <div className="mt-16">{children}</div>
      <AppFooter />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default AppContainer;
