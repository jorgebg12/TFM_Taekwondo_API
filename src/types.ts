export enum Belt {
  White = "white",
  Yellow = "yellow",
  Orange = "orange",
  Green = "green",
  Blue = "blue",
  Red = "red",
  Black = "black",
  Superior = "superior",
}

export enum TechniqueType {
  Ataque = "ataque",
  Defensa = "defensa",
  Posicion = "posicion",
  Pum = "pum",
}

export interface TechniqueEntry {
  id: number;
  name: string;
  image: string;
  type: string;
  belt: Belt;
  marked: boolean;
}

export interface UserEntry {
  id: string;
  email: string;
  username: string;
  password: string;
}
export interface UserTechniqueEntry {
  userId: string;
  techniqueId: number;
}
export type NoVerifiedUserTechniqueEntry = Omit<TechniqueEntry, "marked">;
export type NewTechniqueEntry = Omit<TechniqueEntry, "id">;
export type PublicUserEntry = Omit<UserEntry, "password">;
export type InsertUserEntry = Omit<UserEntry, "id">;
