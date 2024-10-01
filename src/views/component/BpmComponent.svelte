<script lang="ts">
    export let bpm: number = 180;
</script>

<div>
    <div class="frame tweaker">
        <button on:click={() => (bpm -= 10)}>➖</button>
        <input type="number" value={bpm} />
        <button on:click={() => (bpm += 10)}>➕</button>
    </div>
    <div class="frame preset">
        <button on:click={() => (bpm = 120)}>120</button>
        <button on:click={() => (bpm = 180)}>180</button>
    </div>
</div>

<style lang="scss">
    div {
        width: 100%;
        height: 100%;
    }

    div.frame {
        margin: 10px 0;
    }

    div.tweaker {
        $button-size: 30px;

        display: flex;
        justify-content: space-around;
        align-items: center;

        input {
            text-align: center;
            border: solid 0.5px;
            border-radius: 100px;
            background: transparent;
            font-size: 50px;
            width: 200px;
            height: 200px;
        }
        button {
            width: 30px;
            height: 30px;
            border-radius: 15px;
            border: none;
            background: transparent;
            font-size: 30px;
            text-align: center;
            margin: 0;
            padding: 0;
        }
    }
</style>
