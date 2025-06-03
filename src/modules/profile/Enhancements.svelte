<script>
let { enhancements = [] } = $props();

let enhancementsAry = $state(enhancements);

export function updateEnhancements(ary) {
    enhancementsAry = ary;
}
</script>
{#each enhancementsAry as enhancement (enhancement.name)}
<tr>
    <td colspan="2">
        <span
            class="label tip-static"
            data-tipped="<center><b>{enhancement.name}</b></center><br>{enhancement.tooltip}">{enhancement.name}</span>:
    </td>
    <td colspan="2" align="right">
        <table
            class="tip-static level-wrapper"
            data-tipped="<center>Skill Level<br>{enhancement.value}%</center>">
                <tbody>
                    <tr>
                        <td align="left">
                            {#if enhancement.value <= 100}
                            <img
                                src="https://cdn2.fallensword.com/ui/misc/progress_purple.png"
                                style="width: {enhancement.value}%">
                            {:else}
                            <img
                                alt={enhancement.name}
                                src="https://cdn2.fallensword.com/ui/misc/progress_blue.png"
                                style="width: 100%">
                            {/if}
                        </td>
                    </tr>
                </tbody>
        </table>
    </td>
</tr>
{/each}
<style>
    .label {
        color: #333;
        text-wrap: nowrap;
        cursor: pointer;
        text-decoration: underline;
    }
    table.level-wrapper {
        border: 1px solid #333;
        border-spacing: 0px !important;
        width: 162px;
        height: 12px;
    }
    table td {
        padding: 0;
    }
    .level-wrapper img { height: 10px; }
</style>