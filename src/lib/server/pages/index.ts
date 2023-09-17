import { delay } from "$lib";
import { testPage } from "./examples";

export interface Page {
    data: PageData;
    markdown: string;
}

export interface PageData {
    pageId: string;
    title: string;
}

export async function getPage(userId: string, pageId: string) : Promise<Page | null> {
    await delay(2000);

    if (userId === "1") {
        if (pageId === "1") {
            const page: Page = {
                data: {
                    pageId: "1",
                    title: "Test Page 1"
                },
                markdown: testPage
            };
            return page;
        }

        if (pageId === "2") {
            const page: Page = {
                data: {
                    pageId: "1",
                    title: "Test Page 2"
                },
                markdown: testPage
            };
            return page;
        }
        
    }

    return null;
}

export async function getPageDataForUser(userId: string) : Promise<PageData[]> {
    await delay(2000);

    if (userId === "1") {
        const pageData1: PageData = {
            pageId: "1",
            title: "Test Page 1"
        };

        const pageData2: PageData = {
            pageId: "2",
            title: "Test Page 2"
        };

        return [pageData1, pageData2];
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
