<script lang="ts">
    import { Strings } from "$lib"
    export let data;
</script>

{#await data.streamed.html}
	<p>Loading...</p>
{:then html}
    {@html html}

    <hr />
    <div class="footer">
        <p>This page is provided by <a href="/">{Strings.AppName}</a>.</p>
        <a href="/">Report this page</a>
    </div>

    <style>
        .footer {
            color: gray;
        }
    </style>
{:catch error}
    <p>{error.message}</p>
{/await}