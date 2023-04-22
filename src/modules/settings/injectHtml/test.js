import { writeFile } from 'node:fs/promises';
import { Liquid } from 'liquidjs';

const engine = new Liquid();
const html = await engine.renderFile('settings.liquid');
await writeFile('test.html', html);
