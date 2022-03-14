import React from "react";
import { UserContext } from "./components/providers/UserProvider";
import { Router } from "./components/routers/Router";
import "./styles.css";

export default function App() {
  return (
    <UserContext>
      <Router />
    </UserContext>
  );
}
