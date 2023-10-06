import React from "react";
import { Route, Routes } from "react-router-dom";
import UserInput from "../Pages/UserInput";
import RepositoryDetails from "../Pages/RepositoryDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserInput />} />
      <Route path="/repositories/:repoName" element={<RepositoryDetails />} />
    </Routes>
  );
};

export default MainRoutes;
//kjhjjkhkjhjk