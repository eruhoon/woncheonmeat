<script lang="ts">
    import Card from '../card/Card.svelte';
    import TopBar from './TopBar.svelte';
</script>

<div class="nav">
    <TopBar />
</div>
<div class="content">
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    <Card></Card>
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
        display: flex;
        align-items: center;
        border: solid 1px #5d6582;
        border-radius: 5px;
        margin: 5px;
        padding: 5px;
        width: calc(100% - 20px);
        height: calc(100% - $nav-height - 20px);
        background: #ffffff;
    }
</style>
