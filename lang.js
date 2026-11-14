// Dil: ?lang=tr|en|ja, yoksa tarayıcı dili (tr/ja), değilse İngilizce.
(function(){
  var q=(location.search.match(/lang=(tr|en|ja)/)||[])[1];
  var n=(navigator.language||'en').slice(0,2);
  var l=q||(n==='tr'||n==='ja'?n:'en');
  document.body.className=l; document.documentElement.lang=l;
  document.querySelectorAll('.lang a').forEach(function(a){ if(a.dataset.set===l) a.className='on';
    a.addEventListener('click',function(e){e.preventDefault(); location.search='?lang='+a.dataset.set;}); });
})();
