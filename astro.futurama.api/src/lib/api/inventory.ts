import { inventory } from "@db/futurama.json"
export const getAllInventory = () => inventory;
export const getInventoryById = (id: number) => inventory.find((item) => item.id === id);