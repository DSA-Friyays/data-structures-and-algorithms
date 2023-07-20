const { ElementTree } = require("elementtree");

class XmlNavigator {
  constructor(xml = null) {
    this.text = "";
    if (xml !== null) {
      const doc = ElementTree.parse(xml);
      this.text = doc.write({ xml_declaration: false }).toString("ascii");
      const xmlNav = new XmlNavigator();
      console.log(doc.attrib);
      xmlNav.text = doc.text;
      this[doc.tag] = xmlNav;
    }
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<State>
  <City>New York</City>
</State>`;

const xmlObj = new XmlNavigator(xml);

console.log(xmlObj.text);
console.log(
  xmlObj.State !== undefined && xmlObj.State.text !== null
    ? xmlObj.State.text
    : null
);
console.log(
  xmlObj.State !== undefined &&
    xmlObj.State.City !== undefined &&
    xmlObj.State.City.text !== null
    ? xmlObj.State.City.text
    : null
);

(function () {
  useEffect(() => {
    if (debouncedInput === "") {
      setPagData(data?.slice(startFrom, endsAt));
    } else {
      const filteredData = data
        ?.slice(startFrom, endsAt)
        ?.filter((item) =>
          item.title.toLowerCase().includes(debouncedInput.toLowerCase())
        );
      setPagData(filteredData);
    }
  }, [debouncedInput]);
})();


if(!(c in curr.children)){
  curr.children[c] = new TrieNode()
}

{
  search(word: string): boolean {
    function dfs(j: number, root: TrieNode): boolean {
        let cur = root;

        for (let i = j; i < word.length; i++) {
            const c = word[i];

            if (c === '.') {
                for (const key in cur.children) {
                    if (
                        Object.prototype.hasOwnProperty.call(
                            cur.children,
                            key
                        )
                    ) {
                        const child = cur.children[key];
                        if (dfs(i + 1, child)) {
                            return true;
                        }
                    }
                }
                return false;
            } else {
                if (!(c in cur.children)) {
                    return false;
                }
                cur = cur.children[c];
            }
        }

        return cur.endOfWord;
    }
    return dfs(0, this.root);
}
}


(function(){
  addNum (num, heap = this.getHeap(num)) {
    heap.enqueue(num)
    this.rebalance()
}
addNum (num, head = this.getHeap(num)){
  heap.enqueue(num)
  this.rebalance()
}

getHeap (num, { maxHeap, minHeap } = this) {
    const isFirst = maxHeap.isEmpty()
    const isGreater = num <= this.top(maxHeap);
    const isMaxHeap = (isFirst || isGreater);
    return (isMaxHeap)
        ? maxHeap
        : minHeap
}
    top (heap) {
        return heap.front()?.element || 0
    }

})()


