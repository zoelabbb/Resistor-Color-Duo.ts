type Color = "black" | "brown" | "red" | "orange" | "yellow" | "green" | "blue" | "violet" | "grey" | "white";

export function decodedValue(colors: Color[]): number {
  const colorValues: { [color: string]: number } = {
    "black": 0,
    "brown": 1,
    "red": 2,
    "orange": 3,
    "yellow": 4,
    "green": 5,
    "blue": 6,
    "violet": 7,
    "grey": 8,
    "white": 9,
  };
  
  const firstBandValue = colorValues[colors[0]];
  const secondBandValue = colorValues[colors[1]];

  return (10 * firstBandValue) + secondBandValue;

}
