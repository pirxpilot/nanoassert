module.exports = assert;

assert.notEqual = notEqual;
assert.notOk = notOk;
assert.equal = equal;
assert.ok = assert;

function equal(a, b, m) {
  // biome-ignore lint/suspicious/noDoubleEquals: non-strict equality is intentional here
  doAssert(equal, a == b, m);
}

function notEqual(a, b, m) {
  // biome-ignore lint/suspicious/noDoubleEquals: non-strict inequality is intentional here
  doAssert(notEqual, a != b, m);
}

function notOk(t, m) {
  doAssert(notOk, !t, m);
}

function assert(t, m) {
  doAssert(assert, t, m);
}

class AssertionError extends Error {}

function doAssert(fn, t, m) {
  if (!t) {
    const err = new AssertionError(m);
    Error.captureStackTrace?.(err, fn);
    throw err;
  }
}
