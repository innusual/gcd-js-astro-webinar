import fs from "node:fs";

const createCloudflareHeadersFileInsideDist = () => {
  const url = "https://astro-futurama-api.pages.dev/api/*";
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "public, max-age=31536000",
  };
  const outDir = `${process.cwd()}/dist/_headers`;
  fs.writeFileSync(
    outDir,
    `${url}\n${Object.entries(headers)
      .map(([key, value]) => ` ${key}: ${value}`)
      .join("\n")}`,
  );
};

createCloudflareHeadersFileInsideDist();
