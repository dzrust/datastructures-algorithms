exports.logList = (head) => {
  let dummy = head,
    ans = [];
  while (dummy) {
    ans.push(dummy.val);
    dummy = dummy.next;
  }
  return ans;
};
