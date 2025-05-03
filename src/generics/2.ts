import { all } from "axios";

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type NameColor = Pick<AllType, "name" | "color">;

function compare(
  top: NameColor,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
