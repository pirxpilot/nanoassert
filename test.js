const assert = require('.');
const test = require('tape');


test('test DEBUG', function (t) {
  global.DEBUG = true;

  t.plan(10);

  t.doesNotThrow(() => assert(true === true), 'does not throw on truthy');
  t.doesNotThrow(() => assert.notOk(false), 'does not throw on false');
  t.doesNotThrow(() => assert.equal(1, 1), 'does not throw on equal');
  t.doesNotThrow(() => assert.notEqual(1, 2), 'does not throw on not equal');

  t.throws(() => assert(false), 'throws on falsy');
  t.throws(() => assert.notOk(true), 'throws on truthy');
  t.throws(() => assert.equal(1, 2), 'throws on not equal');
  t.throws(() => assert.notEqual(1, 1), 'throws on equal');

  try {
    assert(false);
  } catch (e) {
    t.equal(e.message, '', 'default message');
  }

  try {
    assert(false, 'hello world');
  } catch (e) {
    t.equal(e.message, 'hello world', 'custom message');
  }
});

test('test NDEBUG', function (t) {
  global.DEBUG = false;

  t.plan(8);

  t.doesNotThrow(() => assert(true === true), 'does not throw on truthy');
  t.doesNotThrow(() => assert.notOk(false), 'does not throw on false');
  t.doesNotThrow(() => assert.equal(1, 1), 'does not throw on equal');
  t.doesNotThrow(() => assert.notEqual(1, 2), 'does not throw on not equal');

  t.doesNotThrow(() => assert(false), 'throws on falsy');
  t.doesNotThrow(() => assert.notOk(true), 'throws on truthy');
  t.doesNotThrow(() => assert.equal(1, 2), 'throws on not equal');
  t.doesNotThrow(() => assert.notEqual(1, 1), 'throws on equal');
});
