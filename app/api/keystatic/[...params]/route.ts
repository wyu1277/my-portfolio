import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "@/keystatic.config";

const handler = makeRouteHandler({ config });

// The editor only works on your own computer. In production, refuse every request.
const blocked = () => new Response("Not found", { status: 404 });
const isProduction = process.env.NODE_ENV === "production";

export const GET = isProduction ? blocked : handler.GET;
export const POST = isProduction ? blocked : handler.POST;