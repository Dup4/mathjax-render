import cac from "cac";
import { lightRed } from "kolorist";
import createDebug from "debug";
import { name, version } from "../package.json";
import { Options } from "./types";

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

cli.command("").action(async (options: Options) => {
  if (options.srcDir === undefined) {
    console.error(lightRed("Error: ") + "srcDir is required");
    process.exit(1);
  }

  console.log(options);
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
