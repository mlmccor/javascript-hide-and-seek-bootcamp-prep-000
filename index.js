function getFirstSelector(selector) {
  let a= document.querySelector(selector);
  return a;
}
function nestedTarget() {
  let a= document.querySelector(`div#nested .target`);
  return a;
}
function increaseRankBy(n) {
  let lis= document.getElementById(`app`).querySelectorAll(`ul.ranked-list li`);
  for(let i=0; i < lis.length; i++) {
    lis[i].innerHTML=parseInt(lis[i].innerHTML)+n;
  }
}
function deepestChild() {
  let a= document.getElementById(`grand-node`)
  var b=a.children[0]
  while (b) {
    a=b
    b=a.children[0]
  }
  return b
}

