import { createContext, ReactNode } from "react";

export interface SweepContextType {
  // Export the interface directly
  open: boolean;
  setOpen: (open: boolean) => void;
  setSweepConfig: (config: any) => void;
  setIsOpening: (open: boolean) => void;
  setIsClosing: (open: boolean) => void;
  setIsChanging: (open: boolean) => void;
  sheetChildren: ReactNode | null;
  setSheetChildren: (children: ReactNode) => void;
  nextChildren: ReactNode | null;
  setNextChildren: (children: ReactNode) => void;
}

const SweepContext = createContext<SweepContextType | undefined>(undefined);

export { SweepContext };
