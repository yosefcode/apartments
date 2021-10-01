import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AppContext = createContext(null);

export const ContextProvider = () => {
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    axios.get("/api/milk/").then((res) => {
      setSettings(res.data);
    });
  }, []);
  return (
    <AppContext.Provider value={settings}>
      {console.log(settings)}
    </AppContext.Provider>
  );
};
