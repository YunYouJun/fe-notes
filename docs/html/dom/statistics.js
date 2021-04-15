// DOMParser 无法在非浏览器环境中使用，须粘贴至 Chrome 控制台使用
// const parser = new DOMParser();
// const htmlString = "<strong>就这？</strong>";
// const dom = parser.parseFromString(htmlString, "text/html");

function statistics(root) {
  const tagsMap = new Map();

  const allNodes = root.getElementsByTagName("*");

  let maxTag = {
    name: "",
    value: 0,
  };

  for (let i = 0; i < allNodes.length; i++) {
    const node = allNodes[i];
    if (tagsMap.has(node.tagName)) {
      const num = tagsMap.get(node.tagName) + 1;
      tagsMap.set(node.tagName, num);

      if (num > maxTag.value) {
        maxTag.name = node.tagName;
        maxTag.value = num;
      }
    } else {
      tagsMap.set(node.tagName, 1);
    }
  }

  return maxTag;
}

const ans = statistics(document);
console.log(ans);
