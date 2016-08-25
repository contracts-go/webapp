import Ember from 'ember';

export function htmlSafe(params) {
  const [htmlString] = params;
  return Ember.String.htmlSafe(htmlString);
}

export default Ember.Helper.helper(htmlSafe);
