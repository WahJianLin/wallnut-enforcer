import { Command } from "./commands/_interfaces";
import fs from "node:fs";
import path from "node:path";

const commandsPath: string = path.join(__dirname, "commands");
const commandFiles: string[] = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".ts") && !file.startsWith("_"));
const commandArr: Command[] = [];

for (const file of commandFiles) {
  const filePath: string = path.join(commandsPath, file);
  const commandMeta: Command = require(filePath);
  const command: Command = Object.values(commandMeta)[0];
  commandArr.push(command);
}

export const Commands: Command[] = commandArr;
