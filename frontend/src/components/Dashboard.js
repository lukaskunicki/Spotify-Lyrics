import React from "react";
import useAuth from "../helpers/useAuth";
import SearchBar from "./partials/SearchBar";

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  console.log(accessToken);
  return (<SearchBar/>)
};
export default Dashboard;
