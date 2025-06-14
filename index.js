module.exports = assert;

assert.notEqual = notEqual;
assert.notOk = notOk;
assert.equal = equal;
assert.ok = assert;

function equal(a, b, m) {
  // biome-ignore lint/suspicious/noDoubleEquals: <explanation>
  DEBUG && doAssert(equal, a == b, m);
}

function notEqual(a, b, m) {
  // biome-ignore lint/suspicious/noDoubleEquals: <explanation>
  DEBUG && doAssert(notEqual, a != b, m);
}

function notOk(t, m) {
  DEBUG && doAssert(notOk, !t, m);
}

function assert(t, m) {
  DEBUG && doAssert(assert, t, m);
}

class AssertionError extends Error {}

function doAssert(fn, t, m) {
  if (!t) {
    const err = new AssertionError(m);
    Error.captureStackTrace?.(err, fn);
    throw err;
  }
}
