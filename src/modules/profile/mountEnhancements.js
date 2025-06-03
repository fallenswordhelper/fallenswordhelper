import { mount } from 'svelte';
import querySelectorArray from '../common/querySelectorArray';
import querySelector from '../common/querySelector';
import getText from '../common/getText';
import Enhancements from './Enhancements.svelte';

const enhancementSelector = '#profileLeftColumn > div:nth-child(11) > table > tbody';

export default function mountEnhancements() {
    const enhancements = querySelectorArray(`${enhancementSelector} > tr`)
        .map((tr) => ({
            name: getText(querySelector('a', tr)),
            tooltip: querySelector('a', tr).dataset.tipped.match(/<br>(.*)$/)[1],
            value: Number(querySelector('table', tr).dataset.tipped.match(/\d+/)[0]),
        }));
    const frag = document.createDocumentFragment();
    const app = mount(Enhancements, {
        props: { enhancements },
        target: frag,
    });
    querySelector(enhancementSelector).replaceChildren(frag);
    return app;
}