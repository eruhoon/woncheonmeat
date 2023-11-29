<script lang="ts">
    export let image = 'image';
    export let title = 'title';
    export let description = '';
    export let link = '';

    function onClick() {
        window.open(link);
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="card" on:click={(_) => onClick()}>
    <div class="left">
        <div class="image" style="background-image: url('{image}')"></div>
    </div>
    <div class="right">
        <div class="title">{title}</div>
        {#if description}
            <div class="description">{description}</div>
        {/if}
    </div>
</div>

<style lang="scss">
    .card {
        display: flex;
        border: solid 1px #000;
        border-radius: 5px;

        &:first {
            margin-top: 0;
        }

        &:end {
            margin-bottom: 0;
        }

        .left,
        .right {
            padding: 5px;
            margin: 5px;
            cursor: pointer;
        }
    }

    .image {
        width: 50px;
        height: 50px;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .title {
        font-size: 20px;
    }

    .description {
        font-size: 15px;
    }
</style>
