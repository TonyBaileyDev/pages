<script lang="ts">
    import { Strings } from "$lib"
    export let data;
</script>

{@html data.html}

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