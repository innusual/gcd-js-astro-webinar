
import { handler } from "@utils";
import { getAllInventory } from "api/inventory";

export async function GET() {
  const inventory = getAllInventory();
  return handler.success(inventory);
}
