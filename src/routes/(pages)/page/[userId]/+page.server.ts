import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { getDefaultPage } from "$lib/server/pages";
import { Converter } from "showdown";

export const load: PageServerLoad = async ({ params }) => {
    return {
        html: await getHtml(params.userId)
    };
};

const getHtml = async (userId: string): Promise<string> => {
    const markdown = await getMarkdown(userId);
    return await convertMarkdown(markdown);
}

const getMarkdown = async (userId: string): Promise<string> => {
    const page = await getDefaultPage(userId);

    if (!page)
    {
        throw error(404, {
            message: `The page ${userId} was not found.`,
          });
    }

    return page.markdown;
}

const convertMarkdown = async (markdown: string): Promise<string> => {
    const converter = new Converter();
    const html = converter.makeHtml(markdown);

    return html;
}