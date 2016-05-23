import test from 'ava';
import isSymbol from 'is-symbol';
import * as events from '../src/events';

test('It should be able to define each event as a `Symbol`;', t => {

    for (const x in events) {
        t.true(isSymbol(events[x]));
    }

});
