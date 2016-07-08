/* jshint expr:true */
import { expect } from 'chai'
import {
  describe,
  it
} from 'mocha'
import Ember from 'ember'
import FrostEventsMixin from 'ember-frost-core/mixins/frost-events'

describe('FrostEventsMixin', function () {
  // Replace this with your real tests.
  it('works', function () {
    let FrostComponentObject = Ember.Object.extend(FrostEventsMixin)
    let subject = FrostComponentObject.create()
    expect(subject).to.be.ok
  })
})
