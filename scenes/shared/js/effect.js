/*
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */


goog.provide('app.shared.Effect');

goog.require('app.shared.utils');

// We are *leaking* the Effect global for backwards compatibility.
app.shared.Effect = Effect;

/**
 * Creates some effect using css animations.
 * Adds animate class to element to activate animation.
 * @constructor
 * @param {!app.shared.SharedGame} game The current game object.
 * @param {!Element|!jQuery} elem The element for the effect.
 */
function Effect(game, elem) {
  this.elem = app.shared.utils.unwrapElement(elem);
  this.animateEnded_ = this.animateEnded_.bind(this);
};

/**
 * Animate the effect at a position.
 * @param {number} x The X position.
 * @param {number} y The Y position.
 */
Effect.prototype.animate = function(x, y) {
  // TODO(samthor): Use transform
  var html = /** @type {HTMLElement} */ (this.elem);
  html.style.left = x + 'px';
  html.style.top = y + 'px';
  this.elem.classList.remove('hidden');

  // Animate
  app.shared.utils.animWithClass(this.elem, 'animate', this.animateEnded_, true);
};

/**
 * Hide effect when animation has finished.
 * @private
 */
Effect.prototype.animateEnded_ = function() {
  this.elem.classList.add('hidden');
};
