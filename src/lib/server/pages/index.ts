import { delay } from "$lib";
import { dummyPage } from "./examples";

export interface Page {
    markdown: string;
}

export async function getPage(userId: string, pageId: string) : Promise<Page | null> {
    await delay(2000);

    if (userId === "1" && pageId === "1") {
        const page: Page = {
            markdown: dummyPage
        };

        return page;
    }

    return null;
}

export async function getPagesForUser(userId: string) : Promise<Page[]> {
    await delay(2000);

    if (userId === "1") {
        const page: Page = {
            markdown: dummyPage
        };

        return [page];
    }

    return [];
}

export async function addPage(userId: string, pageId: string, page: Page) : Promise<boolean> {
    await delay(2000);

    if (userId === "1") {
        return true;
    }

    return false;
}

export async function deletePage(userId: string, pageId: string) : Promise<boolean> {
    await delay(2000);
    
    if (userId === "1") {
        return true;
    }

    return false;
}
