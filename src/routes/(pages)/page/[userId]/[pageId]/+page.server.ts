import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { getPage } from "$lib/server/pages";

export const load: PageServerLoad = async ({ params }) => {
    return {
        streamed: {
            markdown: getMarkdown(params.userId, params.pageId)
        }
    };
};

const getMarkdown = async (userId: string, pageId: string): Promise<string> => {
    const page = await getPage(userId, pageId);

    if (!page)
    {
        throw error(404, {
            message: `The page ${userId}/${pageId} was not found.`,
          });
    }

    return page.markdown;
}