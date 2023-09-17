import type { PageLoad } from './$types'
import { Converter } from "showdown";

export const load: PageLoad = async ({ data }) => {
    // Convert from Markdown to HTML in the client.
    return {
        streamed: {
            html: convertMarkdown(data.streamed.markdown)
        }
    }
}

const convertMarkdown = async (markdownPromise: Promise<string>): Promise<string> => {
    const markdown = await markdownPromise;
    const converter = new Converter();
    const html = converter.makeHtml(markdown);

    return html;
}