import type { APIRoute, } from "astro";
import { getInventoryById } from "api/inventory";
import { handler } from "@utils";

export const GET: APIRoute = ({ params }) => {
    try {
        const item = params.id && getInventoryById(Number(params.id));
        if (!item) return handler.notFound();
        return handler.success(item);
    } catch (error) {
        return handler.serverError();
    }
}
