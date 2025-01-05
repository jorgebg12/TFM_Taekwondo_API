import bcrypt from "bcrypt";
import dotenv from "dotenv";
import mysql from "mysql2/promise";
import {
  InsertUserEntry,
  PublicUserEntry,
  TechniqueEntry,
  TechniqueType,
  UserEntry,
} from "../types";
import { toTechniqueEntry } from "../utils";

dotenv.config();

const config = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  port: parseInt(process.env.MYSQL_PORT || "3306"),
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE,
};

export async function connect() {
  const connection = await mysql.createPool(config);
  return connection;
}

export class UserRepository {
  //test
  static async getAllUsers(): Promise<UserEntry[]> {
    const db = await connect();
    const [rows] = await db.query("SELECT * FROM users;");
    const result = rows as Array<UserEntry>;
    return result;
  }

  static async findUser(email: string): Promise<UserEntry | null> {
    const db = await connect();
    try {
      const [data] = await db.execute("SELECT * FROM users WHERE email=?;", [
        email,
      ]);
      const result = data as Array<UserEntry>;

      return result[0] || null;
    } catch (e) {
      throw new Error("error finding an user");
    } finally {
      await db.end();
    }
  }

  static async create(userdata: InsertUserEntry): Promise<PublicUserEntry> {
    console.log(userdata);
    Validations.email(userdata.email);
    Validations.username(userdata.username);
    Validations.password(userdata.password);

    //VERIFICAR que no existe
    if (await this.findUser(userdata.email)) {
      throw new Error("user already exist");
    }
    //generar id
    const id = crypto.randomUUID();
    const hashedPassword = await bcrypt.hash(userdata.password, 10);
    //añadir a database
    const db = await connect();
    try {
      await db.query(
        "INSERT INTO users (id, email, username, password) VALUES (?,?, ?, ?)",
        [id, userdata.email, userdata.username, hashedPassword]
      );
      const publicUser: PublicUserEntry = {
        id,
        email: userdata.email,
        username: userdata.username,
      };

      return publicUser;
    } catch (e) {
      throw new Error("error creating user");
    } finally {
      await db.end();
    }
  }

  static async login({ email, password }: any): Promise<PublicUserEntry> {
    Validations.email(email);
    Validations.password(password);

    const user = await this.findUser(email);
    if (!user) {
      throw new Error("user not found");
    }

    const db = await connect();
    try {
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) throw new Error("password is invalid");

      const publicUser: PublicUserEntry = {
        id: user.id,
        email: user.email,
        username: user.username,
      };

      return publicUser;
    } catch (e) {
      throw new Error("error on login");
    } finally {
      await db.end();
    }
    // const db = await connect();
    // const [data] = await db.query("SELECT email FROM users WHERE email=?;", [
    //   email,
    // ]);
  }
}

class Validations {
  static username(username: any) {
    if (typeof username !== "string")
      throw new Error("username must be a string");
  }
  static email(email: any) {
    if (typeof email !== "string") throw new Error("email must be a string");
  }
  static password(password: any) {
    if (typeof password !== "string")
      throw new Error("password must be a string");
  }
  static exists(data: any) {
    throw new Error(`The value of ${data} is invalid`);
  }
}

export class TechniquesRepository {
  //test
  static async getAllTechniques(): Promise<TechniqueEntry[]> {
    const db = await connect();
    const [rows] = await db.query("SELECT * FROM techniques;");
    const result = rows as Array<TechniqueEntry>;
    const newTechniqueList: TechniqueEntry[] = result.map((i) => {
      return toTechniqueEntry(i);
    });
    console.log(newTechniqueList);
    return newTechniqueList;
  }

  static async getTechniqueByType(
    type: TechniqueType
  ): Promise<TechniqueEntry[]> {
    const db = await connect();
    try {
      const [rows] = await db.query("SELECT * FROM techniques WHERE type=?;", [
        type,
      ]);
      const result = rows as Array<TechniqueEntry>;
      const newTechniqueList: TechniqueEntry[] = result.map((i) => {
        return toTechniqueEntry(i);
      });

      console.log(newTechniqueList);
      return newTechniqueList;
    } catch (e) {
      throw new Error("error getting techniques");
    } finally {
      await db.end();
    }
  }
  static async getTechniqueById(
    techniqueId: number
  ): Promise<TechniqueEntry | null> {
    const db = await connect();
    try {
      const [rows] = await db.query("SELECT * FROM techniques WHERE id=?;", [
        techniqueId,
      ]);
      const result = rows as Array<TechniqueEntry>;
      if (result.length === 0) return null;

      const technique = toTechniqueEntry(result[0]);
      return technique;
    } catch (e) {
      throw new Error("error getting technique");
    } finally {
      await db.end();
    }
  }
  static async getTechniqueByTypeAndUser(
    type: TechniqueType,
    userId: string
  ): Promise<TechniqueEntry[]> {
    const db = await connect();
    try {
      const [rows] = await db.query(
        `
        SELECT *,
            CASE
                WHEN user_techniques.technique_id IS NOT NULL THEN TRUE
                ELSE FALSE
            END AS marked
        FROM techniques
        LEFT JOIN user_techniques
            ON techniques.id = user_techniques.technique_id 
            AND user_techniques.user_id = ?
        WHERE techniques.type = ?;
        `,
        [userId, type]
      );
      const result = rows as Array<TechniqueEntry>;
      const newTechniqueList: TechniqueEntry[] = result.map((i) => {
        return toTechniqueEntry(i);
      });

      console.log(newTechniqueList);
      return newTechniqueList;
    } catch (e) {
      throw new Error("error getting techniques for user");
    } finally {
      await db.end();
    }
  }
  static async markTechnique(userId: string, techniqueId: number) {
    const db = await connect();
    try {
      await db.query(
        "INSERT INTO user_techniques (user_id, technique_id) VALUES (?, ?) ON DUPLICATE KEY UPDATE technique_id = technique_id;",
        [userId, techniqueId]
      );
    } catch (e) {
      throw new Error("error marking technique");
    } finally {
      await db.end();
    }
  }
  static async unmarkTechnique(userId: string, techniqueId: number) {
    const db = await connect();
    try {
      await db.query(
        "DELETE FROM user_techniques WHERE user_id = ? AND technique_id = ?;",
        [userId, techniqueId]
      );
    } catch (e) {
      throw new Error("error unmarking technique");
    } finally {
      await db.end();
    }
  }
}
