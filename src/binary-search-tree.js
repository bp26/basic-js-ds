const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');


class BinarySearchTree {
  constructor() {
    this.start = null
  }
  root() {
    return this.start
  }

  add(data) {
    this.start = addWithin(this.start, data)

    function addWithin(node, data) {
      if (!node) {
        return new Node(data)
      }

      if (node.data === data) {
        return node
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data)
      }

      return node
    }
  }

  has(data) {
    return searchWithin(this.start, data)

    function searchWithin(node, data) {
      if (!node) {
        return false
      }

      if (node.data === data) {
        return true
      }

      if (data < node.data) {
        return searchWithin(node.left, data)
      } else {
        return searchWithin(node.right, data)
      }
    }
  }

  find(data) {
    return findWithin(this.start, data) 

    function findWithin(node, data) {
      if (!node) {
        return null
      }

      if (node.data === data) {
        return node
      }

      if (data < node.data) {
        return findWithin(node.left, data)
      } else {
        return findWithin(node.right, data)
      }
    }
  }

  remove(data) {
    this.start = removeWithin(this.start, data)

    function removeWithin(node, data) {
        if (!node) {
          return null
        }

        if (data < node.data) {
          node.left = removeWithin(node.left, data)
          return node
        } else if (data > node.data) {
          node.right = removeWithin(node.right, data)
          return node
        } else {
          if (!node.left & !node.right) {
            return null
          } else if (!node.left) {
            node = node.right
            return node
          } else if (!node.right) {
            node = node.left
            return node
          } else {
            let minFromRight = node.right

            while (!node.left) {
              minFromRight = minFromRight.left
            }

            node.data = minFromRight.data
            node.right = removeWithin(node.right, minFromRight.data)
            return node
          }
        }
    }
  }

  min() {
    if (!this.start) {
      return null
    }

    let node = this.start
    while (node.left) {
      node = node.left
    }

    return node.data
  }

  max() {
    if (!this.start) {
      return null
    }

    let node = this.start
    while (node.right) {
      node = node.right
    }

    return node.data
  }
}


const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(8);
tree.remove(9);


console.log(tree.has(31));
console.log(tree.has(54));


module.exports = {
  BinarySearchTree
};