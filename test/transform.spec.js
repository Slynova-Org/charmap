'use strict'

/**
 * charmap
 *
 * @license MIT
 * @copyright Slynova - Romain Lanz <romain.lanz@slynova.ch>
 */

const test = require('japa')
const { transform } = require('../src/index')

test.group('Transform', () => {
  test('should return an empty string when giving nothing', (assert) => {
    assert.equal(transform(), '')
  })

  test('should return the equivalent of an ascii character', (assert) => {
    assert.equal(transform('®'), '(r)')
    assert.equal(transform('<'), 'less')
  })
})