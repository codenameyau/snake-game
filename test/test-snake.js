import { assert } from 'chai';
import Snake from '../public/scripts/Snake';

describe('Snake', () => {
  describe('.createSegments()', () => {
    describe('Case 1: Create snake segments left to right', () => {
      let snake = new Snake(0, 0, 2, 0);

      it('should be facing direction left', () => {
        assert.strictEqual(snake.direction, 'left');
      });

      it('should have head at correct position', () => {
        assert.sameMembers(snake.segments[0], [0, 0]);
      });

      it('should have tail at correct position', () => {
        assert.sameMembers(snake.segments[snake.segments.length - 1], [2, 0]);
      });

      it('should create the correct number of segments', () => {
        assert.sameMembers(snake.segments[0], [0, 0]);
        assert.sameMembers(snake.segments[1], [1, 0]);
        assert.sameMembers(snake.segments[2], [2, 0]);
      });
    });

    describe('Case 2: Create snake segments right to left', () => {
      let snake = new Snake(2, 0, 0, 0);

      it('should be facing direction right', () => {
        assert.strictEqual(snake.direction, 'right');
      });

      it('should have head at correct position', () => {
        assert.sameMembers(snake.segments[0], [2, 0]);
      });

      it('should have tail at correct position', () => {
        assert.sameMembers(snake.segments[snake.segments.length - 1], [0, 0]);
      });

      it('should create the correct number of segments', () => {
        assert.sameMembers(snake.segments[0], [2, 0]);
        assert.sameMembers(snake.segments[1], [1, 0]);
        assert.sameMembers(snake.segments[2], [0, 0]);
      });
    });

    describe('Case 3: Create snake segments up to down', () => {
      let snake = new Snake(0, 0, 0, 2);

      it('should be facing direction up', () => {
        assert.strictEqual(snake.direction, 'up');
      });

      it('should have head at correct position', () => {
        assert.sameMembers(snake.segments[0], [0, 0]);
      });

      it('should have tail at correct position', () => {
        assert.sameMembers(snake.segments[snake.segments.length - 1], [0, 2]);
      });

      it('should create the correct number of segments', () => {
        assert.sameMembers(snake.segments[0], [0, 0]);
        assert.sameMembers(snake.segments[1], [0, 1]);
        assert.sameMembers(snake.segments[2], [0, 2]);
      });
    });

    describe('Case 4: Create snake segments down to up', () => {
      let snake = new Snake(0, 2, 0, 0);

      it('should be facing direction down', () => {
        assert.strictEqual(snake.direction, 'down');
      });

      it('should have head at correct position', () => {
        assert.sameMembers(snake.segments[0], [2, 0]);
      });

      it('should have tail at correct position', () => {
        assert.sameMembers(snake.segments[snake.segments.length - 1], [0, 0]);
      });

      it('should create the correct number of segments', () => {
        assert.sameMembers(snake.segments[0], [0, 2]);
        assert.sameMembers(snake.segments[1], [0, 1]);
        assert.sameMembers(snake.segments[2], [0, 0]);
      });
    });
  });
});
