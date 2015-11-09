QUnit.test( "Task 1", function( assert ) {
    assert.equal(solution1([0, 1, 10]), 2);
    assert.equal(solution1([0, 10]), 1);
    assert.equal(solution1([]), 1);
    assert.equal(solution1([-1]), 1);
    assert.equal(solution1([-1, 2, 3]), 1);
    assert.equal(solution1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11);
});

QUnit.test( "Task 2", function( assert ) {
    assert.equal(solution2(""), true);
    assert.equal(solution2("[]"), true);
    assert.equal(solution2("[()]"), true);
    assert.equal(solution2("[](){}"), true);
    assert.equal(solution2("[(])"), false);
    assert.equal(solution2("["), false);
    assert.equal(solution2("]"), false);
});

QUnit.test( "Task 3", function( assert ) {
    assert.deepEqual(solution3([1,2,3], '(a)=>a*2'), [2,4,6]);
    assert.deepEqual(solution3([1,2,3], '(a)=>a+2'), [3,4,5]);
    assert.deepEqual(solution3([1,2,3], '()=>1'), [1,1,1]);
    assert.deepEqual(solution3([1,2,3], 'a=>a*a'), [1,4,9]);
    assert.deepEqual(solution3([1,3,5], '(a,i)=>a*i'), [0,3,10]);
});