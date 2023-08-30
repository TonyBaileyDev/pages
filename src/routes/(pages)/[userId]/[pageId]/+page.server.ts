import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { getPage } from "$lib/pages";

export const load: PageServerLoad = async ({ params }) => {
    const page = await getPage(params.userId, params.pageId);
    if (!page)
    {
        throw error(404, {
            message: `The page ${params.userId}/${params.pageId} was not found.`,
          });
    }

    return {
        markdown: page.markdown
    };
};