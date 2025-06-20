export default runApp;
import assert from 'assert';

class Node { 
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left  = left;
        this.right = right;
    }
}

function treeByLevels(root) {
    if (!root) return [];
    return collectNodes(root)
        .sort((a, b) => a[1] - b[1]) 
        .map(([value]) => value);
}

function collectNodes(node, acc = [], depth = 0) {
    acc.push([node.value, depth]);
    if (node.left) collectNodes(node.left, acc, depth + 1);
    if (node.right) collectNodes(node.right, acc, depth + 1);
    return acc;
}


function test() {
    const treeOne =
        new Node(2,
            new Node(8,
                new Node(1),
                new Node(3)
            ),
            new Node(9,
                new Node(4),
                new Node(5)
            )
        );
    const treeTwo =
        new Node(1,
            new Node(8,
                null,
                new Node(3)
            ),
            new Node(4,
                null,
                new Node(5,
                    null,
                    new Node(7)
                )
            )
        );

    assert.deepEqual(treeByLevels(treeOne), [2,8,9,1,3,4,5]);
	assert.deepEqual(treeByLevels(treeTwo), [1,8,4,3,5,7]);
}

function runApp() {
    test();
}
