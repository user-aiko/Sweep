import { useContext } from "react";
import { SweepContext } from "../context";

const useSweepContext = () => {
  const context = useContext(SweepContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export default useSweepContext;
