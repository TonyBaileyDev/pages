import type { PageLoad } from './$types'
import { Converter } from "showdown";

export const load: PageLoad = async ({ parent, data }) => {
    await parent();
    const converter = new Converter();
    const html = converter.makeHtml(data.markdown);
    return {
        data,
        html
    }
}