"use client";

import { store } from "@/modules/store/store";
import React, { FC, ReactNode } from "react";
import { Provider } from "react-redux";

interface Props {
  children: ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
