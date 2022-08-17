const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

function removeKFromList(node, k) {
  if (node === null) {return null}
  if (!node.next & node.value === k) {return null}
  if (!node.next) {return node}

  if (node.value === k) {
    let next = node.next
    if (next.value !== k) {
      node = node.next
    } else {
      node = removeKFromList(node.next, k)
      return node
    }
  }
  node.next = removeKFromList(node.next, k)
  return node
}

module.exports = {
  removeKFromList
};
