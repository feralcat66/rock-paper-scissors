// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(true, false);
});

import { checkResult } from '../roshambo.js';

test('Paper beats rock', assert => {

    const player = 'paper';
    const computer = 'rock';
    const expected = 'win';

    const result = checkResult(player, computer);
    assert.equal(result, expected);
});

test ('')