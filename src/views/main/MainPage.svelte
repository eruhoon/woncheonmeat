<script lang="ts">
    import { onMount } from 'svelte';
    import BpmComponent from '../component/BpmComponent.svelte';

    let bpm: number = 180;
    let beat: number = 4;

    let counter = 0;
    let timer: number | null = null;

    let player1: HTMLAudioElement;
    let player2: HTMLAudioElement;

    function play() {
        const oneMinute = 60 * 1000;
        const unit = oneMinute / bpm;
        let now = new Date().getTime();
        timer = setInterval(() => {
            player2.play();
        }, unit);
    }
</script>

<div class="nav"></div>
<div class="content">
    <h3>BPM</h3>
    <BpmComponent {bpm} />
</div>

<div class="content">
    <h3>Beat</h3>
    <button on:click={() => (beat = 3)}>3</button>
    <button on:click={() => (beat = 4)}>4</button>
</div>

<div class="content">
    <button on:click={() => play()}>▶️</button>
    <audio src="%sveltekit.assets%/sound/metronome1.mp3" bind:this={player1}></audio>
    <audio src="%sveltekit.assets%/sound/metronome2.mp3" bind:this={player2}></audio>
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
        align-items: center;
        text-align: center;
        border: solid 1px #5d6582;
        border-radius: 5px;
        margin: 5px;
        padding: 5px;
        width: calc(100% - 20px);
        height: calc(100% - $nav-height - 20px);
        background: #ffffff;
    }

    input {
        font-size: 30px;
    }

    button {
        font-size: 30px;
    }
</style>
