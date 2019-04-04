
function onloadPlayCanvas()
{

	
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 return;
}	

	//document.getElementById('transformer_iframe').contentWindow.location.reload();

	 var isChrome  = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
	 var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	 var isIE = detectIE();
	 
	// Apply specific code for firefox (exception)
	
	if(isFirefox  || isIE )
	{
		
		$( "#transformer_iframe" ).mouseover(  function() {
			
			disableScrollingWithJQuery();
	 });


	$( "#transformer_iframe" ).mouseleave(  function() {
		 //enableScrollingWithJQuery();
	 });

	}

	if(isChrome){
		$( "#transformer_iframe" ).contents().on.mouseover(  function() {
			$(document.body).css("height","100%");
			$(document.body).css("overflow","hidden");
	 	});


		$( "#transformer_iframe" ).contents().on.mouseleave(  function() {
		    $(document.body).css("height","");
			$(document.body).css("overflow","");
	 	});
	}

	else
	{
	// block scrolling on inframe.
		$("#transformer_iframe").contents().on('wheel', function(e){

			e.preventDefault(); 
		});

	
	}

	
	
}


function disableScrollingWithJQuery(){


   $("#transformer_iframe").contents().on("mousewheel", function (event) {
            // remove default behavior
            event.preventDefault(); 

            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
		

}



// Librairy to detect if using IE

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
  var ua = window.navigator.userAgent;


  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    return true;
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
   return true;
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
	return false;
  }

  // other browser
  return false;
}

function detectSafari(){
return (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) 
}
