import { isValidElement } from "react";

function isSameElement(
  newElement: React.ReactNode,
  oldElement: React.ReactNode | null
) {
  return (
    isValidElement(newElement) &&
    isValidElement(oldElement) &&
    newElement.key === oldElement.key
  );
}

function getScaleRatio(element: HTMLElement) {
  const style = window.getComputedStyle(element);
  const transform = style.transform;

  if (!transform || transform === "none") {
    return 1;
  }

  const matrix = transform.match(/^matrix\((.+)\)$/);
  if (matrix) {
    const values = matrix[1].split(", ");
    const scaleX = parseFloat(values[0]);
    const scaleY = parseFloat(values[3]);
    return (scaleX + scaleY) / 2;
  }

  const matrix3d = transform.match(/^matrix3d\((.+)\)$/);
  if (matrix3d) {
    const values = matrix3d[1].split(", ");
    const scaleX = parseFloat(values[0]);
    const scaleY = parseFloat(values[5]);
    return (scaleX + scaleY) / 2;
  }

  return 1;
}

function getTransformRatio(sheet: HTMLDivElement, temp: HTMLDivElement) {
  return sheet.getBoundingClientRect().height -
    temp.getBoundingClientRect().height >=
    0
    ? sheet.getBoundingClientRect().height -
        temp.getBoundingClientRect().height >
      0
      ? 1
      : 0
    : -1;
}

export { isSameElement, getScaleRatio, getTransformRatio };
