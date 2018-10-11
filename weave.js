function bstSequence(node) {
  if (!node) return [[]];

  let left = bstSequence(node.left);
  let right = bstSequence(node.right);
  let collection = [];

  for (var i = 0; i < left.length; i++) {
    for (var j = 0; j < right.length; j++) {
      let weaveSeq = weave(left[i], right[j]);
      weaveSeq.forEach(seq => {
        collection.push([node.val, ...seq]);
      });
    }
  }
  return collection;
}

function weave(arr1, arr2) {
  if (!arr2.length) return [arr1];

  let currentEl = arr2[0];
  let collection = [];
  for (var i = 0; i <= arr1.length; i++) {
    let leftSide = arr1.slice(0, i);
    let rightSide = arr1.slice(i);
    let restWeave = weave(rightSide, arr2.slice(1));
    restWeave.forEach(right => {
      collection.push([...leftSide, currentEl, ...right]);
    });
  }
  return collection;
}

function Node(val) {
  this.val = val;
  this.right = this.left = null;
}

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.right = six;
three.left = seven;

console.log(bstSequence(one));

// console.log(weave([1, 2], ["a", "b"]));
