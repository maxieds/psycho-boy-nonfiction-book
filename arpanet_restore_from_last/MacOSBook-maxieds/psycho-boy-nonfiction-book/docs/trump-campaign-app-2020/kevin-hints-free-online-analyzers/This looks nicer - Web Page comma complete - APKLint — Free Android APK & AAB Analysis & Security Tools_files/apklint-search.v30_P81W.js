
(function(){
  var q=document.getElementById('q');
  if(!q)return;
  var cards=[].slice.call(document.querySelectorAll('.card[data-name]'));
  var secs=[].slice.call(document.querySelectorAll('.section[data-cat]'));
  var empty=document.getElementById('empty');
  var status=document.getElementById('q-status');
  function run(){
    var v=q.value.trim().toLowerCase(); var n=0;
    cards.forEach(function(c){
      var m=!v||c.dataset.name.indexOf(v)>-1||c.dataset.kw.indexOf(v)>-1;
      c.style.display=m?'':'none'; if(m)n++;
    });
    secs.forEach(function(s){
      var any=[].slice.call(s.querySelectorAll('.card')).some(function(c){return c.style.display!=='none';});
      s.style.display=any?'':'none';
    });
    if(empty)empty.style.display=n?'none':'block';
    if(status)status.textContent=v?(n+(n===1?' tool':' tools')+' found'):'';
  }
  q.addEventListener('input',run);
})();
