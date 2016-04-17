import test from 'ava';
import fn from './';

test('title', t => {
	t.is(fn('foo'), 1);
	t.is(fn('foo\nbar'), 2);
	t.is(fn('foo\r\nbar'), 2);
});
