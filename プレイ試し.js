
document.addEventListener('change',e=>{
  const t=e.target;
  if(t.closest('[name=formation],[name=formation]')){
    const form=[...document.querySelectorAll('[name=formation]:checked')].map(x=>x.value);
    const moti=[...document.querySelectorAll('[name=formation]:checked')].map(x=>x.value);
    document.querySelectorAll('.list_item').forEach(x=>{
      let flg=false;
      if(form.length>0 || moti.length>0){
        flg=true && 
            (form.length==0 || JSON.parse(x.dataset.uformation).filter(y=>form.indexOf(y)>=0).length) &&
            (moti.length==0 || JSON.parse(x.dataset.formation).filter(y=>moti.indexOf(y)>=0).length)
      }
      x.toggleAttribute('hidden',!flg);
    });
  }
});
window.addEventListener('DOMContentLoaded', ()=>{
  const e = new CustomEvent("HTMLEvents");
  e.initEvent('change', true, true );
  document.querySelector('[name=formation]').dispatchEvent(e);
});

