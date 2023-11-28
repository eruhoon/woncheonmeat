<script lang="ts">
    import TopBar from './TopBar.svelte';
</script>

<div class="nav">
    <TopBar />
</div>
<div class="content">
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>

<style lang="scss">
    $nav-height: 70px;
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
