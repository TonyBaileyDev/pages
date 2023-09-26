import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { getPage } from "$lib/server/pages";
import { Converter } from "showdown";

export const load: PageServerLoad = async ({ params }) => {
    return {
        html: await getHtml(params.userId, params.pageId)
    };
};

const getHtml = async (userId: string, pageId: string): Promise<string> => {
    const markdown = await getMarkdown(userId, pageId);
    return await convertMarkdown(markdown);
}

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

const convertMarkdown = async (markdown: string): Promise<string> => {
    const converter = new Converter();
    const html = converter.makeHtml(markdown);

    return html;
}