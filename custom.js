
$(document).ready(function() {


    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
   $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: 0.5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration

    });
    
    $('.carousel').carousel();
    
    
     $(".button-collapse").sideNav()
     
     function openLink(link)
{
	
   location.href = link;

}
    

});


   