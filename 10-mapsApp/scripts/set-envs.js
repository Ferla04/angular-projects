const { writeFileSync, mkdirSync } = require("fs");

require("dotenv").config();

const targetPath = "./src/environments/environments.ts";
const envFileContent = `
export const environments = {
  example: "${process.env["EXAMPLE"]}",
};
`;

mkdirSync("./src/environments", { recursive: true });
writeFileSync(targetPath, envFileContent);
