import cac from "cac";
import { lightRed } from "kolorist";

import createDebug from "debug";

import { name as pkgName, version } from "../package.json";

import { CliOption } from "./types";

const name = pkgName;

const debug = createDebug(name + ":cli");

const cli = cac(name);

cli.option("--srcDir <srcDir>", "source dir");

cli.option(
  "--useWorker [useWorker]",
  "Whether to use worker multi-threaded execution",
  {
    default: false,
  },
);

cli.command("").action(async (option: CliOption) => {
  if (option.srcDir === undefined) {
    console.error(lightRed("Error: ") + "srcDir is required");
    process.exit(1);
  }

  console.log(option);
  console.log("Hello world");
});

cli.help();

cli.version(version);

async function bootstrap() {
  const handle = (error: unknown) => {
    if (error instanceof Error) {
      console.error(lightRed("Error: ") + error.message);
    } else {
      console.error(error);
    }
    debug(error);
  };

  process.on("unhandledRejection", (error) => {
    handle(error);
  });

  try {
    cli.parse(process.argv, { run: false });
    await cli.runMatchedCommand();
  } catch (error: unknown) {
    handle(error);
    process.exit(1);
  }
}

bootstrap();
