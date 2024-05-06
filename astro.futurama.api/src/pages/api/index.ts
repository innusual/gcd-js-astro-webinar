import json, { meta as metaData, info as metaInfo } from "@db/futurama.json";
import { handler } from "@utils";
const info = metaInfo[0];
const meta = metaData.map(({ examples, featured, categories, ...rest }) => ({ ...rest, info, categories, }))[0];
const notEndpoints = ["meta", "info"];
const endpoints = Object.keys(json).filter((key) => !notEndpoints.includes(key))

export async function GET() {
  return handler.success({ ...meta, endpoints });
}
