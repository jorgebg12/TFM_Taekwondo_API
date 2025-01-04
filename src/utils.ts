import { Belt, NewTechniqueEntry, TechniqueEntry } from "./types";

const isString = (string: string): boolean => {
  return typeof string === "string";
};

const isBelt = (param: any): boolean => {
  return Object.values(Belt).includes(param);
};
const parseString = (stringFromRequest: any): string => {
  if (!isString(stringFromRequest)) {
    throw new Error(`Incorrect string : ${stringFromRequest}`);
  }
  return stringFromRequest;
};
const parseId = (idFromRequest: any): number => {
  if (typeof idFromRequest !== "number") {
    throw new Error(`Incorrect number : ${idFromRequest}`);
  }
  return idFromRequest;
};
const parseMarked = (markedFromRequest: any): boolean => {
  return markedFromRequest === 1;
};
const parseBelt = (beltFromRequest: any): Belt => {
  if (!isString(beltFromRequest) || !isBelt(beltFromRequest)) {
    throw new Error("Incorrect belt");
  }
  return beltFromRequest;
};
export const toNewTechniqueEntry = (object: any): NewTechniqueEntry => {
  const newTechnique: NewTechniqueEntry = {
    name: parseString(object.name),
    image: parseString(object.image),
    type: parseString(object.type),
    belt: parseBelt(object.belt),
    marked: object.marked,
  };
  return newTechnique;
};

export const toTechniqueEntry = (object: any): TechniqueEntry => {
  const newTechnique: TechniqueEntry = {
    id: parseId(object.id),
    name: parseString(object.name),
    image: parseString(object.image),
    type: parseString(object.type),
    belt: parseBelt(object.belt),
    marked: parseMarked(object.marked),
  };
  return newTechnique;
};
