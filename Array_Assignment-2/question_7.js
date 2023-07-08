const constant = {
    equal: 'equal',
    dexreasing: 'dexreasing',
    increasing: 'increasing',
}

var isMonotonic = function(nums) {
    let status = constant.equal;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1] && [constant.equal,constant.increasing].includes(status)) {
            status = constant.increasing;
        } else if (nums[i] > nums[i + 1] && [constant.equal, constant.dexreasing].includes(status)) {
            status = constant.dexreasing;
        } else if (nums[i] !== nums[i + 1]) {
            return false;
        }
    }

    return true;
};