// 437. Path Sum III
var pathSum = function(root, targetSum) {
    var res = 0;

    var kek = (r = root, s = 0, o = {0:1}) => {
        if (!r) return;

        s += r.val;
        res += o[s - targetSum] || 0;
        o[s] = ++o[s] || 1;


        kek(r.left, s, {...o});
        kek(r.right, s, {...o});
    }

    kek();

    return res;
};
