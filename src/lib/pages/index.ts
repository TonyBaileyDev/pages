import { dummyPage } from "./examples";

export interface Page {
    markdown: string;
}

export async function getPage(userId: string, pageId: string) : Promise<Page | null> {
    if (userId === "1" && pageId === "1") {
        const page: Page = {
            markdown: dummyPage
        };

        return page;
    }

    return null;
}
