import React, { createContext, useContext, useState } from "react";
const resultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Boca juniors");

  const getResult = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
      },
    });
    const data = await response.json();
    console.log(data);
    if (type.includes("/news")) {
      setResults(data.entries);
    } else if (type.includes("/images")) {
      setResults(data.image_results);
    } else {
      setResults(data.results);
    }
    setIsLoading(false);
  };

  return (
    <resultContext.Provider
      value={{ results, getResult, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </resultContext.Provider>
  );
};

export const useResultContext = () => useContext(resultContext);
