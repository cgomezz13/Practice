// This is a solution to a Leet Code problem, link below:
// https://leetcode.com/problems/path-sum-iii/

function Node(val) {
  this.val = val;
  this.right = this.left = null;
}

// Solution
function findAllPaths(root, target) {
  if (!root) return 0;
  let count = 0;

  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
    pathFromRoot(node, 0);
  }

  function pathFromRoot(root, sum) {
    if (!root) return;

    if (sum + root.val === target) {
      count += 1;
    }

    pathFromRoot(root.left, sum + root.val);
    pathFromRoot(root.right, sum + root.val);
  }

  return count;
}

// Prints ALL Paths from a binary tree
// function findAllPaths(root) {
//   if (!root.left && !root.right) return [[root.val]];
//   if (!root.left) return [[root.val, root.right.val], [root.right.val]];
//   if (!root.right) return [[root.val, root.left.val], [root.right.val]];
//
//   let allPaths = [];
//   let left = findAllPaths(root.left);
//   let right = findAllPaths(root.right);
//
//   left.forEach(path => {
//     allPaths.push(path);
//     if (path[0] === root.left.val || path[0] === root.right.val) {
//       allPaths.push([root.val, ...path]);
//     }
//   });
//
//   right.forEach(path => {
//     allPaths.push(path);
//     if (path[0] === root.left.val || path[0] === root.right.val) {
//       allPaths.push([root.val, ...path]);
//     }
//   });
//
//   return allPaths;
// }

//    FIRST TREE

// let one = new Node(1);
// let two = new Node(2);
// let three = new Node(3);
// let four = new Node(4);
// let five = new Node(5);
// let six = new Node(6);
// let seven = new Node(7);
// one.left = two;
// one.right = three;
// two.left = four;
// two.right = five;
// three.right = six;
// three.left = seven;
//
// console.log(findAllPaths(one));

//    NEXT TREE

let ten = new Node(10);
let five = new Node(5);
let negThree = new Node(-3);
let three = new Node(3);
let two = new Node(2);
let eleven = new Node(11);
let negTwo = new Node(-2);
let one = new Node(1);
let eight = new Node(8);

ten.left = five;
ten.right = negThree;
five.left = three;
five.right = two;
negThree.right = eleven;
two.right = one;
three.right = eight;
three.left = negTwo;

console.log(findAllPaths(ten, 8));
