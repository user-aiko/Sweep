type sweepConfig = {
    blur?: boolean;
    disableTouchEvents?: boolean;
    blockBodyClick?: boolean;
    clickBodyToClose?: boolean;
    borderRadius?: number;
};
type sweepCallbacks = {
    onToggle?: (state: boolean) => void;
    onSwitch?: (oldChildren: React.ReactNode, newChildren: React.ReactNode) => void;
};
declare function useSweep(config?: sweepConfig, callbacks?: sweepCallbacks): {
    open: (element: React.ReactNode) => void;
    close: () => void;
};

interface SweepWrapperProps {
    children: React.ReactNode;
    backgroundColor?: string;
    foregroundColor?: string;
    backgroundClassName?: string;
    foregroundClassName?: string;
}
declare const SweepWrapper: React.FC<SweepWrapperProps>;

export { SweepWrapper, useSweep };
