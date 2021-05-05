var assert = require("assert");
import { parseHTML } from "../src/parser";

describe("parse html:", function () {
  it("<a></a>", function () {
    let tree = parseHTML("<a></a>");
    console.log(tree);
    assert.equal(tree.children[0].tagName, "a");
    assert.equal(tree.children[0].children.length, 0);
  });
  it('<a href="//google.com"></a>', function () {
    let tree = parseHTML('<a href="//google.com"></a>');
    console.log(tree);
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0);
  });
  it("<a href id></a>", function () {
    let tree = parseHTML("<a href id></a>");
    console.log(tree);
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0);
  });
  it("<a href />", function () {
    let tree = parseHTML("<a href />");
    console.log(tree);
    assert.equal(tree.children.length, 1);
    assert.equal(tree.children[0].children.length, 0);
  });
  it('<a id=abc class="haha" >abc</a>', function () {
    let tree = parseHTML('<a id=abc class="haha" >abc</a>');
    console.log(tree);
    console.log("tree.children", tree.children);
  });
  it("<a  id=abc />", function () {
    let tree = parseHTML("<a  id=abc />");
    console.log(tree);
    console.log("tree.children", tree.children);
  });
  it('<a  id="abc"/>', function () {
    let tree = parseHTML('<a  id="abc"/>');
    console.log(tree);
    console.log("tree.children", tree.children);
  });
  it("<a  id='abc'/>", function () {
    let tree = parseHTML("<a  id='abc'/>");
    console.log(tree);
    console.log("tree.children", tree.children);
  });
  it("<A  id='abc'/> uper", function () {
    let tree = parseHTML("<A  id='abc'/>");
    console.log(tree);
    console.log("tree.children", tree.children);
  });
  it("<>", function () {
    let tree = parseHTML("<>");
    console.log(tree);
    console.log("tree.children", tree.children);
  });
  // it("<a id='app' class='haha' >abc</a>", function () {
  //   let tree = parseHTML("<a id='app' class='haha'>abc</a>");
  //   console.log(tree);
  //   assert.equal(tree.children[0].tagName, "a");
  // });
});
