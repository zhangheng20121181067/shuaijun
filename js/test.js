/**
 * Created by zh on 2017/6/8.
 */
// JavaScript Document
    $(function(){
        var lunbo1=hxsd_tools.getByClass(document,"banner")[0];
        slide(lunbo1);
        function slide(obj){
            var ol=obj.getElementsByClassName('list-btn')[0];
            var oul=obj.getElementsByClassName('list-img')[0];
            var abtn=ol.getElementsByTagName('span');
            var ali=oul.getElementsByTagName('li');

            var li_w=hxsd_tools.getStyle(ali[0],'width');
            var n=0;
            var timer=null;
            oul.style.width=li_w*ali.length+'px';
            function chagebtn(n){
                for( j=0;j<abtn.length;j++){
                    abtn[j].className="";
                }
                abtn[n].className="current";
            }

            function show(){
                clearInterval(timer);
                timer=setInterval(function(){
                    chagebtn(n);
                    hxsd_tools.animate(oul,{ 'left':-n*li_w });
                    n++;
                    if(n>abtn.length-1){
                        n=0;
                    }
                },7000)
            }
            show();
            for(var i=0;i<abtn.length;i++){
                abtn[i].index=i;
                abtn[i].onmouseover=function(ev){
                    oEv=ev||window.event;
                    clearInterval(timer);
                    chagebtn(this.index);
                    hxsd_tools.animate(oul,{ 'left':-this.index*li_w },1200);
                    oEv.cancelBubble=true;
                    n=this.index;
                };
                /* prebtn.onclick=function(){
                 n--;
                 if(n<0){ n=0; };
                 chagebtn(n);
                 hxsd_tools.animate(oul,{ 'left':-n*li_w });

                 };
                 nextbtn.onclick=function(){
                 n++;
                 if(n>abtn.length-1){n=0;}
                 hxsd_tools.animate(oul,{ 'left':-n*li_w });
                 chagebtn(n);
                 };*/

                obj.onmouseover = function() {
                    clearInterval(timer);
                    /*  prebtn.style.display="block";
                     nextbtn.style.display="block";*/
                };
                obj.onmouseout = function() {
                    /*  prebtn.style.display="none";
                     nextbtn.style.display="none";*/
                    show();
                };
            };
        }
    });






