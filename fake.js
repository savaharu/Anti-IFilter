let select = window.confirm('ねらくんについて興味はありますか？？');

if(select) {
  window.alert('Go to his HP!');
  window.open('https://sites.google.com/view/nerakun/home', '_blank');
}
else {
  let pass = window.prompt('よろしいんですね？？');
  
  if(pass == '三角関数') window.alert('ようこそ！');
  else window.alert('問答無用！ｗｗｗ');
}
