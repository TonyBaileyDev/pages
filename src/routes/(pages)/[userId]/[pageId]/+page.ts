import type { PageLoad } from './$types'
import { Converter } from "showdown";

export const load: PageLoad = async ({ parent, data }) => {
    await parent();

    // Convert from Markdown to HTML in the client.
    const converter = new Converter();
    const html = converter.makeHtml(data.markdown);
    return {
        data,
        html
    }
}