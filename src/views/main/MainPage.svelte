<script lang="ts">
    import { base } from '$app/paths';
    import Card from '../card/Card.svelte';
    import TopBar from './TopBar.svelte';

    async function fetchInven() {
        const response = await fetch(`${base}/api/maple-inven.json`);
        return await response.json();
    }
</script>

<div class="nav">
    <TopBar />
</div>
<div class="content">
    {#await fetchInven() then articles}
        {#each articles as article}
            <Card image="./favicon.png" title={article.title} link={article.link}></Card>
        {/each}
    {/await}
    <Card image="./favicon.png"></Card>
</div>

<style lang="scss">
    $nav-height: 50px;
    .nav {
        display: flex;
        align-items: center;
        border: solid 1px #5d6582;
        border-radius: 5px;
        margin: 5px;
        padding: 5px;
        width: calc(100% - 20px);
        height: $nav-height - 20px;
        background: #ffffff;
    }

    .content {
        border: solid 1px #5d6582;
        border-radius: 5px;
        margin: 5px;
        padding: 5px;
        width: calc(100% - 20px);
        height: calc(100% - $nav-height - 20px);
        background: #ffffff;
    }
</style>
