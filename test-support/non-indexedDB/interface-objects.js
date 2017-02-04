// Out of web-platform-tests/dom

/*beginscript::/resources/testharness.js::endscript*/
/*beginscript::/resources/testharnessreport.js::endscript*/

function testInterfaceDeletable(iface) {
  test(function() {
    assert_true(!!window[iface], "Interface should exist.")
    assert_true(delete window[iface], "The delete operator should return true.")
    assert_equals(window[iface], undefined, "Interface should be gone.")
  }, "Should be able to delete " + iface + ".")
}
var interfaces = [
  "Event",
  "CustomEvent",
  "EventTarget",
  "Node",
  "Document",
  "DOMImplementation",
  "DocumentFragment",
  "ProcessingInstruction",
  "DocumentType",
  "Element",
  "Attr",
  "CharacterData",
  "Text",
  "Comment",
  "NodeIterator",
  "TreeWalker",
  "NodeFilter",
  "NodeList",
  "HTMLCollection",
  "DOMTokenList"
];
test(function() {
  for (var p in window) {
    interfaces.forEach(function(i) {
      assert_not_equals(p, i)
    })
  }
}, "Interface objects properties should not be Enumerable")
interfaces.forEach(testInterfaceDeletable);
