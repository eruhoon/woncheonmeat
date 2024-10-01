<script lang="ts">
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
        console.log(unit);
        counter = 0;
        timer = setInterval(() => {
            if (counter === 0) {
                new Audio('sound/metronome1.mp3').play();
            } else {
                new Audio('sound/metronome2.mp3').play();
            }
            counter = (counter + 1) % beat;
        }, unit);
    }

    function stop() {
        clearInterval(timer);
        timer = null;
    }
</script>

<div class="nav"></div>
<div class="content">
    <h3>BPM</h3>
    <BpmComponent bind:bpm />
</div>

<div class="content">
    <h3>Beat</h3>
    <button class="beat-button" class:active={beat === 3} on:click={() => (beat = 3)}>3</button>
    <button class="beat-button" class:active={beat === 4} on:click={() => (beat = 4)}>4</button>
</div>

<div class="content">
    {#if timer !== null}
        <button on:click={() => stop()}>⏹️</button>
    {:else}
        <button on:click={() => play()}>▶️</button>
    {/if}

    <audio src="sound/metronome1.mp3" bind:this={player1}></audio>
    <audio src="sound/metronome2.mp3" bind:this={player2}></audio>
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

    button.beat-button {
        background: transparent;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 25px;

        &.active {
            background: #a8a8a8;
        }
    }
</style>
