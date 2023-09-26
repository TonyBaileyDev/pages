<script lang="ts">
    export let data;
</script>

{#await data.streamed.account}
	<p>Loading...</p>
{:then account}
    <h1>Welcome {account.userDisplayName}!</h1>
    <a href="/page/{account.userId}">Default page</a>
    {#each account.pageData as pageData}
        <ul>
		    <li><a href="/page/{account.userId}/{pageData.pageId}">{pageData.title}</a></li>
        </ul>
	{/each}
{:catch error}
    <p>{error.message}</p>
{/await}