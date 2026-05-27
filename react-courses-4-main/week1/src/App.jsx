// import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/dashboard" element={<DashboardComponent />} />
          <Route path="/transaction" element={<TransactionComponent />} />
          <Route path="/wallet" element={<WalletComponent />} />
          <Route path="/goals" element={<GoalsComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
