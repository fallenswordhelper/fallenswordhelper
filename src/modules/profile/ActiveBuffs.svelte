<script>
    import getValue from '../system/getValue';
    import ModalConfirm from '../modal/ModalConfirm.svelte';
    import daRemoveSkill from '../_dataAccess/daRemoveSkill';
    import { mount } from 'svelte';

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

    function deactivateBuff(buff) {
        mount(
            ModalConfirm,
            {
                target: document.body,
                props: {
                    msg: `Are you sure you wish to remove the ${buff.name} skill?`,
                    visible: true,
                    resolve: async (doDeactivate) => {
                        if (!doDeactivate) return;
                        await daRemoveSkill(buff.id);
                        buffs = buffs.filter((i) => i.id != buff.id);
                    }
                }
            },
        );
    }

    const showBuffLevel = getValue('showBuffLevel');
</script>
<div class="buff-list">
{#each buffs as buff (buff.id)}
    <div class="buff" onclick={() => deactivateBuff(buff)}>
        <img
            src="https://cdn2.fallensword.com/skills/{buff.id}.png"
            alt={buff.name}
            width="25"
            height="25"
            class="tip-static"
            data-tipped="<div style='width: 250px; font-size: 12px;'><center><span style='color: #0f0'><b>{buff.name}</b> (Level: {buff.level})</span><br>{buff.tooltip}<br>[Click to De-Activate]</center></div>">
        {#if showBuffLevel}
        <div class="buff-level">({buff.level})</div>
        {/if}
        <div class="time-left">{formatDuration(buff.duration)}</div>
    </div>
{/each}
</div>
<style>
.buff-list {
    text-align: center;
    padding-top: 2px;
    justify-content: space-around;
}
.buff {
    display: inline-block;
    text-align: center;
    cursor: pointer;
}
.buff-level, .time-left {
    font-size: 10px;
    text-wrap: nowrap;
}
.buff-level {
    font-weight: bold;
}
</style>