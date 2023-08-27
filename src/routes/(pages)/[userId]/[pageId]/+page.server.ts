import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    if(!(params.userId === "1" && params.pageId === "1"))
    {
        throw error(404, {
            message: `The page ${params.userId}/${params.pageId} was not found.`,
          });
    }
};