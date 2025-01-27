import { getScaleRatio } from "./helpers";

function parentMainAnimation(
  sheet: HTMLDivElement,
  parent: HTMLDivElement,
  isOpen: boolean,
  isSwitching: boolean,
  borderRadius: number,
  delay: number,
  duration: number
) {
  const sheetHeight =
    sheet.getBoundingClientRect().height / getScaleRatio(sheet);
  return parent.animate(
    {
      transform: isOpen ? `translateY(-${sheetHeight}px)` : `translateY(0)`,
      borderRadius: isOpen
        ? `0px 0px ${borderRadius}px ${borderRadius}px`
        : "0px",
    },
    {
      duration: duration,
      easing: EASES.glide,
      // : "cubic-bezier(0.4, 0.0, 0.0, 1.0)",
      fill: "forwards",
      delay: delay,
    }
  );
}

function dragEndAnimation(
  sheet: HTMLDivElement,
  parent: HTMLDivElement,
  closing: boolean,
  time: number = 350
) {
  const sheetHeight =
    sheet.getBoundingClientRect().height / getScaleRatio(sheet);

  if (closing) {
    return {
      parentAnimation: parent.animate(
        {
          transform: `translateY(0px)`,
        },
        {
          duration: time,
          easing: "cubic-bezier(0.2, 0.5, 0.5, 1.0)",
          fill: "forwards",
        }
      ),
      sheetAnimation: sheet.animate(
        {
          transformOrigin: "bottom center",
          transform: "scale(0.8)",
          opacity: 0.4,
        },
        {
          duration: time,
          easing: "cubic-bezier(0.2, 0.5, 0.5, 1.0)",
          fill: "forwards",
        }
      ),
    };
  }
  return {
    parentAnimation: parent.animate(
      {
        transform: `translateY(-${sheetHeight}px)`,
      },
      {
        duration: 350,
        easing: "cubic-bezier(0.2, 0.5, 0.5, 1.0)",
        fill: "forwards",
      }
    ),
    sheetAnimation: sheet.animate(
      {
        marginBottom: `0px`,
        transform: "scale(1)",
        opacity: 1,
      },
      {
        duration: 350,
        easing: "cubic-bezier(0.2, 0.5, 0.5, 1.0)",
        fill: "forwards",
      }
    ),
  };
}

function dragEndCloseAnimation(sheet: HTMLDivElement) {
  sheet.getAnimations().forEach((animation) => animation.cancel());

  return sheet.animate(
    {
      opacity: 0,
      transform: "scale(0.4)",
    },
    {
      duration: 350,
      easing: "cubic-bezier(0.5, 0.2, 0.8, 0.5)",
      fill: "forwards",
    }
  );
}

function sheetFadeOutAnimation(
  sheet: HTMLDivElement,
  transformRatio: number,
  blur: boolean
) {
  return sheet.animate(
    {
      filter: blur ? ["blur(0px)", "blur(10px)"] : "blur(0px)",
      opacity: [1, 0],
      transform: ["translateY(0%)", `translateY(${transformRatio * 5}%)`],
    },
    {
      duration: 200,
      easing: "cubic-bezier(0.5, 0.0, 1.0, 0.5)",
      fill: "forwards",
    }
  );
}

function sheetFadeInAnimation(
  sheet: HTMLDivElement,
  transformRatio: number,
  blur: boolean
) {
  return sheet.animate(
    {
      filter: blur ? ["blur(10px)", "blur(0px)"] : "blur(0px)",
      opacity: [0, 1],
      transform: [`translateY(${-transformRatio * 5}%)`, "translateY(0%)"],
    },
    {
      duration: 700,
      // easing: "cubic-bezier(0.0, 0.5, 0.5, 1.0)",
      easing: EASES.glide,
      fill: "forwards",
    }
  );
}

function sheetMainAnimation(
  sheet: HTMLDivElement,
  isOpen: boolean,
  blur: boolean
) {
  return sheet.animate(
    {
      filter: blur && !isOpen ? "blur(10px)" : "blur(0px)",
      transform: isOpen
        ? ["translateY(50%) scale(0.94)", "translateY(0) scale(1)"]
        : "scale(0.94)",
      opacity: isOpen ? 1 : 0,
    },
    {
      duration: 500,
      // easing: "cubic-bezier(0.4, 0.0, 0.0, 1.0)",
      easing: EASES.glide,
      fill: "forwards",
    }
  );
}

const EASES = {
  glide:
    "linear(0, 0.003 0.4%, 0.012 0.9%, 0.026 1.4%, 0.049 2%, 0.109 3.3%, 0.311 7.2%, 0.409 9.3%, 0.463 10.6%, 0.513 11.9%, 0.562 13.3%, 0.606 14.7%, 0.651 16.3%, 0.691 17.9%, 0.729 19.6%, 0.762 21.3%, 0.792 23.1%, 0.82 25%, 0.846 27%, 0.868 29.1%, 0.889 31.3%, 0.907 33.6%, 0.923 36.1%, 0.937 38.7%, 0.949 41.5%, 0.959 44.5%, 0.968 47.8%, 0.976 51.3%, 0.987 59.1%, 0.994 68.8%, 0.998 81.4%, 1)",
};

export {
  parentMainAnimation,
  sheetFadeOutAnimation,
  sheetFadeInAnimation,
  sheetMainAnimation,
  dragEndAnimation,
  dragEndCloseAnimation,
};
