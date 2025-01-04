import {
  NewTechniqueEntry,
  NoVerifiedUserTechniqueEntry,
  TechniqueEntry,
} from "../types";
import techniqueData from "./techniques.json";

const techniques: Array<TechniqueEntry> =
  techniqueData as Array<TechniqueEntry>;
/////////////////////////////////////////////////////////////////////
export const getEntries = (): TechniqueEntry[] => techniques;

export const findById = (id: number): TechniqueEntry | undefined => {
  const entry = techniques.find((i) => i.id === id);
  // if(entry != null){
  //   const {marked, ...restOfTechnique} = entry;
  //   return restOfTechnique;
  // }
  return entry;
};

export const getEntriesWithoutMark = (): NoVerifiedUserTechniqueEntry[] => {
  return techniques.map(({ id, name, image, type, belt }) => {
    return {
      id,
      name,
      image,
      type,
      belt,
    };
  });
};

export const addTechnique = (
  newTechniqueEntry: NewTechniqueEntry
): TechniqueEntry => {
  const newTechnique = {
    id: Math.max(...techniques.map((t) => t.id)) + 1,
    ...newTechniqueEntry,
  };
  techniques.push(newTechnique);
  return newTechnique;
};
////////////////////////////////////////////////////////

// export const getEntriesDB = async (): Promise<TechniqueEntry[]> => {
//   const db = await connect();
//   const [rows] = await db.query("SELECT * FROM techniques;");
//   const result = rows as Array<TechniqueEntry>;
//   const newTechniqueList: TechniqueEntry[] = result.map((i) => {
//     return toTechniqueEntry(i);
//   });

//   console.log(newTechniqueList);
//   return newTechniqueList;
// };
