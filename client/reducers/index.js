var initial = {
  num: 5,
};
var handlers = {
  INC(s) {
    return {
      num: s.num + 1
    };
  }
};
function reducer(state = initial, action) {
  if (handlers[action.type]) {
    return handlers[action.type](state);
  }

  return state;
}

module.exports = reducer;
