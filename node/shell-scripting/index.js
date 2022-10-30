import * as assert from 'node:assert/strict';
import * as os from 'node:os';
import { builtinModules } from 'node:module';

assert.deepEqual({ name: 'arun' }, { name: 'arun' });
console.log(os.freemem());