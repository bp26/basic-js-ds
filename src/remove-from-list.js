const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');





class ListedList {
  constructor() {
    this.head = null
    this.length = null
  }

  add(value) {
    if (this.head === null) {
      this.head = new ListNode(value)
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }

      current.next = new ListNode(value)
    }

    this.length++
  }

  insert(position, value) {
    if (position < 0 || position > this.length) {
      return false
    }

    let node = new ListNode(value)

    if (position === 0) {
      
      node.next = this.head
      this.head = node
    } else {
      let index = 0
      let current = this.head
      let prev = null
      while (index < position) {
        prev = current
        current = current.next
        index++
      }
      prev.next = node
      node.next = current
    }

    this.length++
  }

  get(position) {
    if (position < 0 || position >= this.length) {
      return null
    }

    let current = this.head
    let index = 0
    while (index < position) {
      current = current.next
      index++
    }
    return current.value
  }

  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return false
    }

    let current = this.head

    if (position === 0) {
      this.head = current.next
    } else {
      let index = 0
      let prev = null
      while (index < position) {
        prev = current
        current = current.next
        index++
      }

      prev.next = current.next
    }
    this.length--
  }

  indexOf(value) {
    if (this.head === null) {
      return false
    }

    let current = this.head
    let index = 0
    while (current) {
      if (current.value === value) {
        return index
      }

      current = current.next
      index++
    }
  }

  remove(value) {this.removeAt(this.indexOf(value))}
}  


function removeKFromList(list, k) {
  console.log(list)
}


module.exports = {
  removeKFromList
};
