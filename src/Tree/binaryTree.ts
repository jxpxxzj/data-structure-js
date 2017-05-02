class TreeNode<T> {
    data: T;
    lChild: TreeNode<T>;
    rChild: TreeNode<T>;
    constructor(val: T, lp: TreeNode<T> = undefined, rp: TreeNode<T> = undefined) {
        this.data = val;
        if (lp !== undefined) {
            this.lChild = lp;
        } else {
            this.lChild = null;
        }
        if (rp !== undefined) {
            this.rChild = rp;
        } else {
            this.rChild = null;
        }
    }
}

class BinaryTree<T> {
    public head: TreeNode<T>;
    constructor(val: T, lp: TreeNode<T> = undefined, rp: TreeNode<T> = undefined) {
        this.head = new TreeNode<T>(val, lp, rp);
    }
    
    public get isEmpty() : boolean {
        return this.head === null;
    }

    public insertL(val: T, p: TreeNode<T>) {
        let tmp = new TreeNode<T>(val);
        tmp.lChild = p.lChild;
        p.lChild = tmp;
    }
    public insertR(val: T, p: TreeNode<T>) {
        let tmp = new TreeNode<T>(val);
        tmp.rChild = p.rChild;
        p.rChild = tmp;
    } 
}