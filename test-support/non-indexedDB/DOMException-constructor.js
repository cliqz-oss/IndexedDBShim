// From web-platform-tests/WebIDL/ecmascript-binding/es-exceptions

/*beginscript::/resources/testharness.js::endscript*/
/*beginscript::/resources/testharnessreport.js::endscript*/

test(function() {
  var ex = new DOMException();
  assert_equals(ex.name, "Error",
                "Not passing a name should end up with 'Error' as the name");
  assert_equals(ex.message, "",
                "Not passing a message should end up with empty string as the message");
}, 'new DOMException()');

test(function() {
  var ex = new DOMException();
  assert_false(ex.hasOwnProperty("name"),
               "The name property should be inherited");
  assert_false(ex.hasOwnProperty("message"),
               "The message property should be inherited");
}, 'new DOMException(): own-ness');

test(function() {
  var ex = new DOMException(null);
  assert_equals(ex.name, "Error",
                "Not passing a name should end up with 'Error' as the name");
  assert_equals(ex.message, "null",
                "Passing null as message should end up with stringified 'null' as the message");
}, 'new DOMException(null)');

test(function() {
  var ex = new DOMException(undefined);
  assert_equals(ex.name, "Error",
                "Not passing a name should end up with 'Error' as the name");
  assert_equals(ex.message, "",
                "Not passing a message should end up with empty string as the message");
}, 'new DOMException(undefined)');

test(function() {
  var ex = new DOMException(undefined);
  assert_false(ex.hasOwnProperty("name"),
               "The name property should be inherited");
  assert_false(ex.hasOwnProperty("message"),
               "The message property should be inherited");
}, 'new DOMException(undefined): own-ness');

test(function() {
  var ex = new DOMException("foo");
  assert_equals(ex.name, "Error",
                "Not passing a name should still end up with 'Error' as the name");
  assert_equals(ex.message, "foo", "Should be using passed-in message");
}, 'new DOMException("foo")');

test(function() {
  var ex = new DOMException("foo");
  assert_false(ex.hasOwnProperty("name"),
               "The name property should be inherited");
  assert_true(ex.hasOwnProperty("message"),
              "The message property should be own");
}, 'new DOMException("foo"): own-ness');

test(function() {
  var ex = new DOMException("bar", undefined);
  assert_equals(ex.name, "Error",
                "Passing undefined for name should end up with 'Error' as the name");
  assert_equals(ex.message, "bar", "Should still be using passed-in message");
}, 'new DOMException("bar", undefined)');

test(function() {
  var ex = new DOMException("bar", "NotSupportedError");
  assert_equals(ex.name, "NotSupportedError", "Should be using the passed-in name");
  assert_equals(ex.message, "bar", "Should still be using passed-in message");
  assert_equals(ex.code, DOMException.NOT_SUPPORTED_ERR,
                "Should have the right exception code");
}, 'new DOMException("bar", "NotSupportedError")');

test(function() {
  var ex = new DOMException("bar", "NotSupportedError");
  assert_true(ex.hasOwnProperty("name"),
              "The name property should be own");
  assert_true(ex.hasOwnProperty("message"),
              "The message property should be own");
}, 'new DOMException("bar", "NotSupportedError"): own-ness');

test(function() {
  var ex = new DOMException("bar", "foo");
  assert_equals(ex.name, "foo", "Should be using the passed-in name");
  assert_equals(ex.message, "bar", "Should still be using passed-in message");
  assert_equals(ex.code, 0,
                "Should have 0 for code for a name not in the exception names table");
}, 'new DOMException("bar", "foo")');

[
  {name: "IndexSizeError", code: 1},
  {name: "HierarchyRequestError", code: 3},
  {name: "WrongDocumentError", code: 4},
  {name: "InvalidCharacterError", code: 5},
  {name: "NoModificationAllowedError", code: 7},
  {name: "NotFoundError", code: 8},
  {name: "NotSupportedError", code: 9},
  {name: "InUseAttributeError", code: 10},
  {name: "InvalidStateError", code: 11},
  {name: "SyntaxError", code: 12},
  {name: "InvalidModificationError", code: 13},
  {name: "NamespaceError", code: 14},
  {name: "InvalidAccessError", code: 15},
  {name: "SecurityError", code: 18},
  {name: "NetworkError", code: 19},
  {name: "AbortError", code: 20},
  {name: "URLMismatchError", code: 21},
  {name: "QuotaExceededError", code: 22},
  {name: "TimeoutError", code: 23},
  {name: "InvalidNodeTypeError", code: 24},
  {name: "DataCloneError", code: 25}
].forEach(function(test_case) {
  test(function() {
    var ex = new DOMException("msg", test_case.name);
    assert_equals(ex.name, test_case.name,
                  "Should be using the passed-in name");
    assert_equals(ex.message, "msg",
                  "Should be using the passed-in message");
    assert_equals(ex.code, test_case.code,
                  "Should have matching legacy code from error names table");
  },'new DOMexception("msg", "' + test_case.name + '")');
});

test(function() {
  var ex = new DOMException("bar", "UnknownError");
  assert_equals(ex.name, "UnknownError", "Should be using the passed-in name");
  assert_equals(ex.message, "bar", "Should still be using passed-in message");
  assert_equals(ex.code, 0,
                "Should have 0 for code for a name in the exception names table with no legacy code");
}, 'new DOMException("bar", "UnknownError")');
