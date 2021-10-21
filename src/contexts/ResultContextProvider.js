import React, { createContext, useContext, useState } from "react";
const resultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const resultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResult = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${type}`);
  };
};
