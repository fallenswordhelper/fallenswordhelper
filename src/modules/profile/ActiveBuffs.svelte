<script>
    let { activeBuffs } = $props();
    let buffs = $state(activeBuffs);
    export function updateActiveBuffs(ary) {
        buffs = ary;
    }
    function formatDuration(secondsLeft) {
        if (secondsLeft > 60) {
            const minutes = Math.floor(secondsLeft / 60);
            const seconds = secondsLeft % 60;
            return `${minutes}m ${seconds}s`;
        }
        return `${secondsLeft}s`;
    }
</script>
<div class="buff-list">
{#each buffs as buff (buff.id)}
    <div class="buff">
        <img
            src="https://cdn2.fallensword.com/skills/{buff.id}.png"
            alt={buff.name}
            width="25"
            height="25"
            class="tip-static"
            data-tipped="<div style='width: 250px; font-size: 12px;'><center><span style='color: #0f0'><b>{buff.name}</b> (Level: {buff.level})</span><br><b>{buff.tooltip}<br>[Click to De-Activate]</center></div>">
        <div class="buff-level">({buff.level})</div>
        <div class="time-left">{formatDuration(buff.duration)}</div>
    </div>
{/each}
</div>
<style>
.buff-list {
    text-align: center;
    padding-top: 2px;
}
.buff {
    display: inline-block;
    text-align: center;
}
.buff-level, .time-left {
    font-size: 10px;
    text-wrap: nowrap;
}
.buff-level {
    font-weight: bold;
}
</style>