import Ember from 'ember';

export function eq(params) {
  let [stringOne, stringTwo, equality] = params;
  // Default to true equality
  if (!equality) equality = true;

  return ((stringOne === stringTwo) == equality);
}

export default Ember.Helper.helper(eq);
