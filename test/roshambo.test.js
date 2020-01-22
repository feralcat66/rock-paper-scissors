import { checkResult } from '../roshambo.js';

const test = QUnit.test;

QUnit.module('checkResult')

test('Paper beats rock', assert => {

    const player = 'paper';
    const computer = 'rock';
    const expected = 'win';

    const result = checkResult(player, computer);
    assert.equal(result, expected);
});

test('scissors beats paper', assert => {

    const player = 'scissors';
    const computer = 'paper';
    const expected = 'win';

    const result = checkResult(player, computer);
    assert.equal(result, expected);
});

test('a draw', assert => {
    const player = 'scissors';
    const computer = 'scissors';
    const expected = 'draw';

    const result = checkResult(player, computer);
    assert.equal(result, expected);
});