var initial = {
  num: 0,
};
var handlers = {
  INC(s) {
    s.num += 1;
    return s;
  }
};
function reducer(state = initial, action) {
  if (handlers[action.type]) {
    return handlers[action.type](state);
  }
  return state;
}

module.exports = reducer;
