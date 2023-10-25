import React from "react";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/posts" element={<h1>Posts Page</h1>} />
    </Routes>
  );
}
