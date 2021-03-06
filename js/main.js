$(document).ready(function(){
  console.log("JQuery DOM ready event");
  var dom_ul = $("ul");
  var dom_list = $("ul li").toArray();
  console.log(dom_ul);
  console.log(dom_list);
  dom_ul.attr("class","list-ordered");
  console.log(dom_list.length);
  console.log("has li",dom_ul.has("li"));
  console.log(dom_list[0]);
  //$(dom_list[0]).html("<button>Boton por defecto</button>");
  var first_button = $("ul li:first-child button");
  first_button.text("Mi primer botón");
  //first_button.css("padding" , 0);
  first_button.css({
    "padding": "0",
    "margin":15,
  });
  first_button.width("150px");
  first_button.height("50px");
  $(dom_list).each(function(index,element){
    console.log(element);
  });
  var new_li_button = first_button.parent().clone();
  dom_ul.append(new_li_button);
  dom_ul.attr({
    "class": "list-ordered",
    "id":"little"

  });
  console.log(new_li_button.siblings());
  console.log(new_li_button.find("button"));
  console.log(new_li_button.find("button").parents());
  /*first_button.click(function(){

  });*/
  /*first_button.one("mouseover mouseover click", function(){//evento que solo se ejecuta una vez
    first_button.parent().siblings().toggle(500);
  });*/

  first_button.on("mouseover mouseleave ", function(){//evento se ejecuta todas las veces que quiera
    first_button.parent().siblings().toggle(500);
  });

  /*first_button.on("mouseleave", function(){
    first_button.parent().siblings().toggle(500);
  });*/
  //new_button.remove();

  var google_link = $("a");
  google_link.on("click" , function(eventObject){
    eventObject.preventDefault();
    eventObject.stopPropagation();
    /*google_link.hide(1000);
    google_link.show(2000);
    google_link.slideUp(3000).delay(3000);
    google_link.slideDown(4000).delay(4000);*/
    dom_ul.toggleClass("Little-list other-class");
  });

  //dom_ul.addClass("Little-list");
  //dom_ul.removeClass("Little-list");
  //dom_ul.toggleClass("Little-list");
});

/*document.addEventListener("DOMContentLoaded", function(){
  console.log("JS DOM ready event");
});*/

console.log("Before DOM ready");
