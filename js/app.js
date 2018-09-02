$(document).ready(function(){
	function capitalise(string){
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	$.ajax({
			url: 'https://randomuser.me/api/?results=12&nat=us',
			dataType: 'json',
			success: function(data){
				let index;
 				var html_grid="";
 				function employee_grid()
 				{
				for(let i = 0; i < data.results.length; i++)
				{
					var img = data.results[i].picture.medium;
					var first_name = data.results[i].name.first;
					var last_name = data.results[i].name.last;
					var city = data.results[i].location.city;
					var mail = data.results[i].email;
					html_grid+='<div class="details">';
					html_grid+='<div class ="item" id ="'+i+'">';
					html_grid+='<img src ="'+img+'" class="profile-img">';
					html_grid+='<p class="heading">'+capitalise(first_name)+' '+capitalise(last_name)+'</p>';
					html_grid+='<p class="email">'+mail+'</p>';
					html_grid+='<p class="place">'+capitalise(city)+'</p>';
					html_grid+='</div>';//close details class
					html_grid+='</div>';//close item class
					$('.container').html(html_grid);
				}//for closed
				}
				

				function buildModal(i)
				{
					var modal_html ="";
					var img = data.results[i].picture.large;
					var first_name = data.results[i].name.first;
					var last_name = data.results[i].name.last;
					var city = data.results[i].location.city;
					var mail = data.results[i].email;
					var username = data.results[i].login.username;
					var cell_no = data.results[i].cell;
					var street = capitalise(data.results[i].location.street) ;
					var state = capitalise(data.results[i].location.state);
					var postcode = data.results[i].location.postcode;
					var dob = data.results[i].dob.date;
					var birth = dob.slice(0,10);
					var address = street + ', '+ capitalise(city) +', '+state+', '+postcode;
					modal_html+='<div class ="modal-content">';
					modal_html+='<div class="content">';
					modal_html+='<img src ="'+img+'" class="modal-img">';
					modal_html+='<p class="employee_name">'+capitalise(first_name)+' '+capitalise(last_name)+'</p>';
					modal_html+='<p class="employee_mail">'+mail+'</p>';
					modal_html+='<p class="employee_city">'+capitalise(city)+'</p>';
					modal_html+='<div class ="hr-line"></div>';
					modal_html+='<p class="employee_phone">'+cell_no+'</p>';
					modal_html+='<p class="address">'+address+'</p>';
					modal_html+='<div class ="employee_birthday">Birthday: ' +birth+'</div>';
					modal_html+='</div>';
					modal_html+='</div>';
					$('.modal').html(modal_html);
					$('.modal').show();
				}
			$('.details').on('click', function(e){
				if(e.target.id)
				{
			 		index = e.target.id;
					console.log('index'+index);
					buildModal(index);
				}
			});
			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event){
				var hasclass = event.target.classList.contains('modal');
				if(hasclass)
				{
					$('.modal').hide();
				}//if closed
			}//window closed
		
			var user_input_search= document.querySelector('#search-box');
			 user_input_search.addEventListener("keyup",()=>{
				var employees=document.querySelectorAll('.details');

      for ( var i = 0; i < employees.length; i++) {
				        var p = employees[i].getElementsByTagName("p")[0];
        if (p.innerHTML.toUpperCase().includes(user_input_search.value.toUpperCase())) {
            employees[i].style.display = "";
        } else {
            employees[i].style.display = "none";
        }
    }
	});


			}//sucess closed
		});	//ajax closed
});//end of document.ready()

