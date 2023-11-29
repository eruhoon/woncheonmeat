<script lang="ts">
    export let image = 'image';
</script>

<div class="card">
    <div class="image" style="background-image: url('{image}')"></div>
    <div class="title">title</div>
    <div class="description">description</div>
</div>

<style lang="scss">
    .card {
        display: block;
        border: solid 1px #000;
        border-radius: 5px;
        padding: 5px;
    }

    .image {
        width: 50px;
        height: 50px;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
