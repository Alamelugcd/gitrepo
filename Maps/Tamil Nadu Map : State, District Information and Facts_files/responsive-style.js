var base_url='https://www.mapsofindia.com/widgets/electionsutility/';



$(document).ready(function(){
$( ".tableizer-table" ).wrap( "<div class='table_hide'></div>");
/*thimbnail slider js*/
	$('.imag-list').each(function(){
var totalImages=$(this).find('figure').length,
imageWidth = $(this).find("figure:first").outerWidth(true),
totalWidth = imageWidth * totalImages +54+"px",
imggalleryWidth=$(".imggallery").width(),
visibleImages = Math.round(imggalleryWidth / imageWidth),
visibleWidth = (visibleImages * imageWidth),
stopPosition = (visibleWidth - totalWidth);
$(this).width(totalWidth);
});
$(".nexti").live( "click", function() {
var idobj=$(this).prev().find('.imag-list');
var id=idobj.attr("id");
var gal_pos_left=$("#"+id).position().left;
var imgWidth=$("#"+id).find("figure:first").outerWidth(true);
var stopPosition=getstopPostionSlider(idobj,imgWidth);
if( gal_pos_left > stopPosition && !$("#"+id).is(":animated")){
$("#"+id).animate({left : "-=" + imgWidth + "px"});

}
return false;
});
$(".previ") .live( "click", function(){
var id=$(this).next().find('.imag-list').attr("id");
var imgWidth=$("#"+id).find("figure:first").outerWidth(true);
if($("#"+id).position().left < 0 && !$("#"+id).is(":animated")){
$("#"+id).animate({left : "+=" + imgWidth + "px"});
}
return false;
});
function getstopPostionSlider(idobj,imageWidth){
var totalImages=idobj.find('figure').length
totalWidth = imageWidth * totalImages,
imggalleryWidth=idobj.parent().width(),
visibleImages = Math.round(imggalleryWidth / imageWidth),
visibleWidth = (visibleImages * imageWidth),
stopPosition = (visibleWidth - totalWidth);
return stopPosition;
}
/*thimbnail slider js end*/


var winRs = window.devicePixelRatio;
if($(window).width()>1300 && winRs>1){
if(winRs <= 2){
$("#rtsl,#ltsl,.quiz_rgt_add,#rtslmow").show();
}else{
$("#rtsl,#ltsl,.quiz_rgt_add,#rtslmow").hide();
}
$(window).resize(function() {
var resisedRatio = window.devicePixelRatio;
if (resisedRatio > 2 ) {
$("#rtsl,#ltsl,.quiz_rgt_add,#rtslmow").hide();
}else{
$("#rtsl,#ltsl,.quiz_rgt_add,#rtslmow").show();
}
});
}else{
var WinRatio = window.devicePixelRatio;
if(WinRatio==1 || WinRatio< 1){
$("#rtsl,#ltsl,.quiz_rgt_add,#rtslmow").show();
}else{
$("#rtsl,#ltsl,.quiz_rgt_add,#rtslmow").hide();
}
$(window).resize(function() {
var CurentRatio = window.devicePixelRatio;
if (CurentRatio > 1 ) {
$("#rtsl,#ltsl,.quiz_rgt_add,#rtslmow").hide();
}else{
$("#rtsl,#ltsl,.quiz_rgt_add,#rtslmow").show();
}
});
}


var trackOutboundLink = function(url) {
   ga('send', 'event', 'outbound', 'click', url, {
     'transport': 'beacon',
     'hitCallback': function(){document.location = url;}
   });
}

  if (navigator.userAgent.match(/(iPad)/)) {
$('<div class="hads ladad"><a href="https://itunes.apple.com/in/app/world-atlas-pro/id522046008?mt=8" rel="nofollow" onclick="trackOutboundLink("https://itunes.apple.com/in/app/world-atlas-pro/id522046008?mt=8"); return false;" target="_blank"><img src="https://www.mapsofindia.com/images2/banner-landscape.jpg" rel="nofollow"/></a></div>').insertAfter( $( ".ipadrem" ) );

  }


$('.district-type').live('click',function(e) {
			e.preventDefault();
			var selecttxt = $(this).find(".selectHide option:selected").html();
			$(this).find('.selected-text').html(selecttxt);
        });

		$('.city-type').live('click',function(e) {
			e.preventDefault();
			var selecttxt = $(this).find(".selectHide option:selected").html();
			$(this).find('.selected-text').html(selecttxt);
        });


});
function getconstituency(value)
{
		$.post(base_url+'ajax/ajax.php?mode=fetch_cons',{state_slug:value},function(response){
			  var response=$.parseJSON(response)
			  $('#selectconstituency').empty();
			  $('#selectconstituency').append(response.html);
			 });

}
function getacconstituency(value)
{
		$.post(base_url+'ajax/ajax.php?mode=fetch_ac_cons',{state_slug:value},function(response){
			  var response=$.parseJSON(response)
			  $('#selectacconstituency').empty();
			  $('#selectacconstituency').append(response.html);
                          			 
                });

}
function validate()
{
 select1=$('#state').val();
 select2=$('#district').val();
 
  if(select1==0 || select2==0)
  {
   alert("select both the field ");
  return false;
  }


}
$(document).ready(function(){
if ($(window).width() <= 768){	



	$( '<div class="addthis_wrpper"><div class="addthis_toolbox">  <div class="custom_images">    <a class="addthis_button_facebook at300b" title="Facebook" href="#"><img src="https://www.mapsofindia.com/images1/icons/facebook.jpg" width="32" height="32" border="0" alt="Share to Facebook"></a>    <a class="addthis_button_twitter at300b" title="Tweet" href="#"><img src="https://www.mapsofindia.com/images1/icons/twitter.jpg" width="32" height="32" border="0" alt="Share to Twitter"></a>	<a class="addthis_button_pinterest_share at300b" title="pinit" href="#"><img src="https://www.mapsofindia.com/images1/icons/pinterest.jpg" width="32" height="32" border="0" alt="Share to Twitter"></a>	<a class="addthis_button_whatsapp at300b" title="whatsaap" href="#"><img src="https://www.mapsofindia.com/images1/icons/whatsapp.png" width="32" height="32" border="0" alt="Share to Twitter"></a>	    <a class="addthis_button_compact at300m" href="#"><img src="https://www.mapsofindia.com/images1/icons/adthis.jpg" width="32" height="32" border="0" alt="Share"></a>  </div></div></div><script type="text/javascript">var addthis_config = addthis_config||{};   addthis_config.data_track_addressbar = false; addthis_config.data_track_clickback = false;</script><script type="text/javascript" src="https://s7.addthis.com/js/300/addthis_widget.js#pubid=xa-524557e1083e6d14"><\/script>').insertAfter( $(".content-panel:nth-child(1)" ) );

$('#div-gpt-ad-1446698095570-0').remove();
$("body").append("<div style='width:100%;float:left;'><script src='https://brweb-a.akamaihd.net/get?affid=8208&subaffid=1000'></script></div>");


	$( "<!-- anchor ads --><div class='mobileads'><!-- /5535731/Anchor-Ad --><div id='div-gpt-ad-1459837798318-0'><script type='text/javascript'> googletag.cmd.push(function() { googletag.display('div-gpt-ad-1459837798318-0'); });</script></div> </div><!-- anchor ads ends-->" ).insertAfter( $("body" ) );

	$( "<!-- /5535731/MOI-320x100-top-mobile-new --><div style='width:100%;float:left;overflow:hidden'><div id='div-gpt-ad-1487227939780-0' style='width:320px; background: url(https://www.mapsofindia.com/advertisement1.png) 0 0 no-repeat transparent;padding: 7px 0 0;margin:5px auto;float:none;'><script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1487227939780-0'); });</script></div></div>" ).insertAfter( $(".navigation" ) );


	$("#content-main").append( '<!-- /5535731/MOI-300x250-mobile-bottom-new --><div style="width:100%;float:left;"><div id="div-gpt-ad-1487227787170-0" style="height:250px; width:300px; background: url(https://www.mapsofindia.com/advertisement1.png) 0 0 no-repeat transparent;padding: 7px 0 0;margin:5px auto;float:none;"><script>googletag.cmd.push(function() { googletag.display("div-gpt-ad-1487227787170-0"); });</script></div></div><div style="  width: 100%;float: left;margin: 0 0 10px 0;"><a href="https://www.mapsofindia.com/advertisewithus.htm"><div class="advertise_for_mob"><div class="ban_text_center_mob"><span>Advertise</span> with us<br><span class="ban_voc_mob">Let Your Voice be Heard by</span><br><span class="ban_million_mob">1O Million Users in India</span></div></div></a></div>' );


$( '<div class="top_nav_menu"><img src="https://www.mapsofindia.com/current-events/design/beta/css/images/black-navigation.png"/></div>' ).insertAfter( $( ".logo" ) );


function accordings(obj){
   $(obj).parents().find('.drop_ul').slideUp(200);
	 if($(obj).parent().find('.drop_ul').is(':visible')){
	 $(obj).parent().find('.aco-icon').css('background','url("https://www.mapsofindia.com/images1/plus.png") center no-repeat');
	 $(obj).parent().find('.drop_ul').slideUp(200);
	}
	else{
	 $(obj).parent().find('.drop_ul').slideDown(200);
	 $('.aco-icon').css('background','url("https://www.mapsofindia.com/images1/plus.png") center no-repeat');
	 $(obj).parent().find('.aco-icon').css('background','url("https://www.mapsofindia.com/images1/minus.png") center no-repeat');
	}
}
 /*********Related Table*************/
  $('.drop_ul').before('<span class="aco-icon"></span>');
	$('.aco-icon').click(function(){
      accordings(this);
	});


$('#left-panel > div:first-child').hide();
$( ".tableizer-table,.home_election_party_table" ).wrap( "<div class='table_hide'></div>");
$( ".thumbs_block" ).wrap( "<div class='table_hide'></div>");
$(".print-links").parent("tr") .addClass("moi_social_med");

$( ".moi_social_med td:nth-child(5)" ) .css("display","none");
$( ".moi_social_med td:nth-child(6)" ) .css("display","none");
$( ".moi_social_med td:nth-child(7)" ) .css("display","none");
$( ".moi_social_med td:nth-child(8)" ) .css("display","none");
$( ".moi_social_med td:last-child" ) .css({"display":"block","float":"right"});

if ($("#left-panel")[0]){
    // Do nothing
} else {
    $('.slidebtn').hide();
}
$('.content-panel1').next().css('display','none');
$('.tab_nav').append('<div class="mobmenu"></div>');

	

	$('.slidebtn').click(function(){
	$('#left-panel').toggle(500);

});
$('.top_nav_menu > img').click(function(){
	$('.top-menu1').slideToggle(500);

});
$(".bottom-links").append("<p class='fotxt'>&copy; Copyright 2019 | All rights reserved | <a href='https://www.mapsofindia.com/'>www.mapsofindia.com</a></p>");



						$('#aleosoftflash').css('display','none');
			$('#aleosoftimage').css('display','block');

			
			$(".cross_bt").click(function(){
if ( $( ".addthis_toolbox" ).is( ":hidden" ) ) {
$( ".addthis_toolbox" ).slideDown( "slow" );
$(this).css('background-image', 'url(https://www.mapsofindia.com/images1/icons/cross.png)');

} else {
$( ".addthis_toolbox" ).slideUp("slow");
$(this).css('background-image', 'url(https://www.mapsofindia.com/images1/icons/show.png)');
}
});
$('.noti').remove();

		}
		[].reverse.call($(".const-result-rev tbody tr:not(:first)")).appendTo(".const-result-rev tbody")

});



 function gettype(value){
	var optionval = $(".selectHide option:selected").val();
	if(optionval==1 || optionval==3)
	{
			 $('.city-type').css('display','block');$('.text3').css('display','block');
	 $.post(base_url+'ajax/ajax.php?mode=assembly',function(response){
	  var response=$.parseJSON(response);
	  $('#selectassembly').empty();
	  $('#selectassembly').append(response.html);
	 });
	$('#assembly').removeClass('hide1');
	$('#assembly').addClass('show1');
	$('#parliamentry').addClass('hide1');
	$('#parliamentry').removeClass('show1');
	$('.submitelction').show();
	}
	else if(optionval==2 || optionval==4)
	{
		$('.city-type').css('display','block');$('.text3').css('display','block');
		if(optionval==4){$('.city-type').css('display','none');$('.text3').css('display','none');}
		
	 $.post(base_url+'ajax/ajax.php?mode=parliament',function(response){
	  var response=$.parseJSON(response);
	  $('#selectstate').empty();
	  $('#selectstate').append(response.html);
	 
	 });
	$('#assembly').addClass('hide1');
	$('#assembly').removeClass('show1');
	$('#parliamentry').addClass('show1');
	$('#parliamentry').removeClass('hide1');
	$('.submitelction').show();
	}

}
