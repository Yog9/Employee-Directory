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
 				
 				
				for(let i = 0; i < data.results.length; i++)
				{
					var img = data.results[i].picture.medium;
					var first_name = data.results[i].name.first;
					var last_name = data.results[i].name.last;
					var city = data.results[i].location.city;
					var mail = data.results[i].email;
					html_grid+='<div class ="grid-item" id="'+i+'">';
					html_grid+='<img src ="'+img+'" class="image-modal" id="'+i+'">';
					html_grid+='<ul class="info">';
					html_grid+='<li class ="heading" id="'+i+'">'+capitalise(first_name)+' '+capitalise(last_name)+'</li>';
					html_grid+='<li class= "email" id="'+i+'">'+mail+'</li>';
					html_grid+='<li class ="place" id="'+i+'">'+capitalise(city)+'</li>';
					html_grid+='</ul>';
					html_grid+='</div>';
 
					$('.container').html(html_grid);
				}//for closed
				
				
				//Function for buiding popp up box on click
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
					modal_html+='<img src ="'+img+'" class="modal-img" id ="'+i+'">';
					modal_html+='<p class="employee_name heading">'+capitalise(first_name)+' '+capitalise(last_name)+'</p>';
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

				
				 function  clickfunction(e){
				if(e.target.id) 
				{
			 		index = e.target.id;
					console.log('index'+index);
					buildModal(index);
				}
			}
			$('.image-modal').on('click',clickfunction);
				$('.heading').on('click',clickfunction);
				$('.email').on('click',clickfunction);
				$('.place').on('click',clickfunction);

				

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event){
				var hasclass = event.target.classList.contains('modal');
				if(hasclass)
				{
					$('.modal').hide();
				}//if closed
			}//window closed	

//search functionality
var items=document.querySelectorAll(".grid-item");
			var user_input_search= document.querySelector('#search-box');
			 user_input_search.addEventListener("keyup",()=>{
				var user_input = user_input_search.value.toLowerCase();
				console.log(user_input);
				for(let i=0;i<items.length;i++)
	{
		var first_nam= data.results[i].name.first;
					first_nam = first_nam.toLowerCase();
					//console.log(first_nam);
					var last_nam= data.results[i].name.last;
					last_nam = last_nam.toLowerCase();
					//console.log(last_nam);
					var full_name = first_nam+' '+last_nam;
					console.log(full_name);

					if((full_name.includes(user_input)))
					{
						console.log("matched");
		
		items[i].style.display = "";
	}
		else
			items[i].style.display = "none";
		
	
	}
	
			});//input search closed
			


			}//sucess closed
		});	//ajax closed
});//end of document.ready()

