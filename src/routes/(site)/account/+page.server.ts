import type { PageServerLoad } from "./$types";
import { getPageDataForUser, type PageData } from "$lib/server/pages";

export const load: PageServerLoad = async () => {
    return {
        streamed: {
            account: getAccount()
        }
    };
};

const getAccount = async (): Promise<{userId: string, userDisplayName: string, pageData: PageData[]}> => {
    const userId = "1";
    const userDisplayName = "Tony";
    var pageData = await getPageDataForUser(userId);

    return {
        userId,
        userDisplayName,
        pageData
    };
}