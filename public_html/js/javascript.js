/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
               $("#panel1").hide(300).show(1000);
               $("#panel1").slideUp(1000).slideDown(2000);
               $("#panel1").fadeOut(1000).fadeIn(3000);
               $("#panel1").toggle(1000).toggle(1000);//pga id 
            });//$(function(){} er det samme

$(document).ready(function(){
               $("#panel1").css({
                   color:'red',
                   fontWeight:'bold',
                   fontSize: 50});
               $('#panel2').css({
                   opacity:'0,5',
                   color:'blue'
               });
              
            });
$(document).ready(function(){
        var c='halla balla';
        $(".btn").on('click',function(){
            var panelId=$(this).attr('data-panelid');
            
          $('#'+ panelId).toggle();  
          $('#'+ panelId).html(c);
          console.log(panelId);
        });
        
   
});

$(document).ready(function(){
               $('.list').on('click',function(){
                   if($(this).is('.special')){
                       console.log('special');
                   }
                  $(this).find('li').filter('.special').toggle(); 
               });
               });
