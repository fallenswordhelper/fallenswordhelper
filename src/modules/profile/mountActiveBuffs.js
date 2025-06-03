import { mount } from 'svelte';
import querySelector from '../common/querySelector';
import ActiveBuffs from './ActiveBuffs.svelte';

const buffsSelector = '#profileRightColumn > div:nth-child(14)';

export default function mountActiveBuffs() {
    const target = document.createDocumentFragment();
    const app = mount(ActiveBuffs, { target });
    querySelector(buffsSelector).replaceChildren(target);
    return app;
}