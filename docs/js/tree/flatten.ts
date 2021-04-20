interface Tree {
  name: number;
  children?: Tree[];
}

const trees: Tree[] = [
  {
    name: 1,
    children: [
      {
        name: 2,
        children: [
          {
            name: 3,
          },
        ],
      },
    ],
  },
];

const result = [
  {
    name: 1,
  },
  {
    name: 2,
  },
  {
    name: 3,
  },
];

/**
 * 拍平
 * @param tree
 */
export function flatten(trees: Tree[]) {
  let ans = [];
  trees.forEach((tree) => {
    ans.push({
      name: tree.name,
    });
    if (Array.isArray(tree.children) && tree.children.length) {
      ans = ans.concat(flatten(tree.children));
    }
  });
  return ans;
}

const ans = flatten(trees);
console.log(ans);

if (JSON.stringify(ans) === JSON.stringify(result)) {
  console.log(true);
}
// true
