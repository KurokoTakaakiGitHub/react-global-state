import React from "react";
import { RecoilRoot } from "recoil";
import { Router } from "./components/routers/Router";
import "./styles.css";

export default function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}
