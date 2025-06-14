const test = require('node:test');

const assert = require('.');

test('test DEBUG', function (t) {
  global.DEBUG = true;

  t.plan(10);

  // biome-ignore lint/suspicious/noSelfCompare: <explanation>
  t.assert.doesNotThrow(() => assert(true === true), 'does not throw on truthy');
  t.assert.doesNotThrow(() => assert.notOk(false), 'does not throw on false');
  t.assert.doesNotThrow(() => assert.equal(1, 1), 'does not throw on equal');
  t.assert.doesNotThrow(() => assert.notEqual(1, 2), 'does not throw on not equal');

  t.assert.throws(() => assert(false), 'throws on falsy');
  t.assert.throws(() => assert.notOk(true), 'throws on truthy');
  t.assert.throws(() => assert.equal(1, 2), 'throws on not equal');
  t.assert.throws(() => assert.notEqual(1, 1), 'throws on equal');

  try {
    assert(false);
  } catch (e) {
    t.assert.equal(e.message, '', 'default message');
  }

  try {
    assert(false, 'hello world');
  } catch (e) {
    t.assert.equal(e.message, 'hello world', 'custom message');
  }
});

test('test NDEBUG', function (t) {
  global.DEBUG = false;

  t.plan(8);

  // biome-ignore lint/suspicious/noSelfCompare: <explanation>
  t.assert.doesNotThrow(() => assert(true === true), 'does not throw on truthy');
  t.assert.doesNotThrow(() => assert.notOk(false), 'does not throw on false');
  t.assert.doesNotThrow(() => assert.equal(1, 1), 'does not throw on equal');
  t.assert.doesNotThrow(() => assert.notEqual(1, 2), 'does not throw on not equal');

  t.assert.doesNotThrow(() => assert(false), 'throws on falsy');
  t.assert.doesNotThrow(() => assert.notOk(true), 'throws on truthy');
  t.assert.doesNotThrow(() => assert.equal(1, 2), 'throws on not equal');
  t.assert.doesNotThrow(() => assert.notEqual(1, 1), 'throws on equal');
});
