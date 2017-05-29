import { assert } from 'chai';
import Snake from '../public/scripts/Snake';

describe('Snake', () => {
  describe('.createSegments()', () => {
    describe('Case 1: Create snake segments left to right', () => {
      let snake = new Snake(0, 0, 2, 0);
      it('should create the correct segments', () => {
        assert.sameMembers(snake.segments[0], [0, 0]);
        assert.sameMembers(snake.segments[1], [1, 0]);
        assert.sameMembers(snake.segments[2], [2, 0]);
      });
    });

    describe('Case 2: Create snake segments right to left', () => {
      let snake = new Snake(2, 0, 0, 0);
      it('should create the correct segments', () => {
        assert.sameMembers(snake.segments[0], [2, 0]);
        assert.sameMembers(snake.segments[1], [1, 0]);
        assert.sameMembers(snake.segments[2], [0, 0]);
      });
    });
  });
});
