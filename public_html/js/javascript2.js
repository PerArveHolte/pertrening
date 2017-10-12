/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*var input= prompt("tast inn et tall mellom 0 og 100");
input=parseInt(input);
var output=Math.floor(Math.random()*input)+1;
alert('Du tastet '+ input+ '. Tall mellom 0 og '+ input+ ' vises!!'+ output);*/ 

/*$(function(){
    // figure out which panel to show
    $(".tab-panels .panels li").on('click',function(){
        
       // $panel.find('.tabs li.active').removeClass('active');
        var panelId=$(this).attr("id");
        
        
        $('.tab-panels .panel.active').slideUp(300,function(){
            $(this).removeClass('active');
            $('#'+ panelId).slideDown(300,function(){
                $(this).addClass('active');
                
            });
            
        });
        
         //$('#'+ panelId).hide(500).show(500);
        
       
        
        });
       
      
    });
  /*  $(".btn").on('click',function(){
            var panelId=$(this).attr('data-panelid');
            
          $('#'+ panelId).toggle();  
          $('#'+ panelId).html(c);
          console.log(panelId);*/
    
    //hide current panel
    
    // show new panel*/
  $(function() {

    $('.tab-panels .tabs li').on('click', function() {

        var $panel = $(this).closest('.tab-panels');

        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');

        //figure out which panel to show
        var panelToShow = $(this).attr('data-a');

        //hide current panel
        $panel.find('.panel').slideUp(300, showNextPanel);
        console.log(panelToShow);
        console.log('hi');
       //$( "p" ).add( document.getElementById( "a" )

        //show next panel
        function showNextPanel() {
            $(this).removeClass('active');
            
            $('#'+panelToShow).slideDown(300, function() {
                $(this).addClass('active');
            });
        }
    });


});


/*<div class="tab-panels">
            <ul class="tabs">
                <li id="panel5" class="active">panel5</li>
                <li id="panel6">panel6</li>
                <li id="panel7">panel7</li>
                <li id="panel8">panel8</li>
            </ul>

            <div id="panel5" class="panel active">
                content5<br/>
                content5<br/>
                content5<br/>
                content5<br/>
                content5<br/>
            </div>
            <div id="panel6" class="panel">
                content6<br/>
                content6<br/>
                content6<br/>
                content6<br/>
                content6<br/>
            </div>
            <div id="panel7" class="panel">
                content7<br/>
                content7<br/>
                content7<br/>
                content7<br/>
                content7<br/>
            </div>
            <div id="panel8" class="panel">
                content8<br/>
                content8<br/>
                content8<br/>
                content8<br/>
                content8<br/>
            </div>*/
