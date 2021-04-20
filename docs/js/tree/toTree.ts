interface TreeNode {
  id: number;
  /**
   * 父亲节点
   */
  pid?: number;
  name: string;
}

const source: TreeNode[] = [
  {
    id: 1,
    name: "body",
  },
  {
    id: 2,
    pid: 1,
    name: "title",
  },
  {
    id: 3,
    pid: 1,
    name: "div",
  },
  {
    id: 4,
    pid: 3,
    name: "span",
  },
  {
    id: 5,
    pid: 3,
    name: "icon",
  },
  {
    id: 6,
    pid: 4,
    name: "subspan",
  },
];

/**
 * 构建树
 * @param data
 */
export function toTree(data: TreeNode[]) {
  let result = [];
  if (!Array.isArray(data)) {
    return;
  }

  // 构建节点索引
  let map = {};
  data.forEach((item) => {
    map[item.id] = item;
  });

  data.forEach((item) => {
    let parent = map[item.pid];
    if (parent) {
      if (parent.children) {
        parent.children.push(item);
      } else {
        parent.children = [item];
      }
    } else {
      result.push(item);
    }
  });

  return result;
}

const ans = toTree(source);
console.log(JSON.stringify(ans, null, 2));
