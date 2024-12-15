function parentStyle(
  open: boolean,
  bgColor?: string,
  blockBodyClick?: boolean
): React.CSSProperties {
  return {
    pointerEvents: blockBodyClick ? "none" : "auto",
    backgroundColor: bgColor,
    position: "absolute",
    overflow: open ? "hidden" : "auto",
    zIndex: 1,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };
}

function overlayStyle(open: boolean, fgColor?: string): React.CSSProperties {
  return {
    backgroundColor: fgColor,
    position: "fixed",
    zIndex: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };
}

function indicatorStyle(open: boolean): React.CSSProperties {
  return {
    height: 4,
    width: 80,
    zIndex: 1,
    backgroundColor: "#FFFFFF30",
    borderRadius: 6,
    marginBottom: 6,
    position: "fixed",
    top: "calc(100% - 4px - 6px)",
    left: "calc(50% - 40px)",
    pointerEvents: "none",
    opacity: open ? 1 : 0,
    transform: open ? "scaleX(1)" : "scaleX(0)",
    transition: "opacity transform 0.2s ease-in-out",
  };
}

function animatorStyle(): React.CSSProperties {
  return {
    width: "100%",
    position: "fixed",
    bottom: 0,
    left: 0,
    // transform: "translateY(100%) scale(0.9)",
  };
}

export { parentStyle, overlayStyle, indicatorStyle, animatorStyle };
