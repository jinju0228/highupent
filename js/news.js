// var count = 0;
// window.onscroll = function(e) {
   
//     if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

//         count++;
//         var addContent = '<div class="block"><p>'+ count +'번째로 추가된 콘텐츠</p></div>';

//         $('article').append(addContent);
//     }
// };

// $(document).ready(function(){
//     var ele=function(){
//         for(var i=1; i<=8; i++){
//             $('<h1>' + 가나다라마마마마마마맘+ '</h1>').appendTo('body');
//         }
// };
// ele();


// $(window).scroll(function(){
//     var a = $(window).scrollTop() + $(window).height();
//     var b = $(document).height();
//     if(a<=b){
//         ele();
//     }
// });
// });
$(window).on("scroll", function() {
	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();		

	$("#scrollHeight").text(scrollHeight);
	$("#scrollPosition").text(scrollPosition);
	$("#bottom").text(scrollHeight - scrollPosition);

	if (scrollPosition > scrollHeight - 500) {			
		//todo
		
	}
});