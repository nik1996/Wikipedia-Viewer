$(document).ready(function(){
  $("a").click(function(){
    $("a").css("color","#DC7633");
  });
});
$(".ic").click(function(event){
  $(".input-prepend").addClass("target1");
  $(".add-on").html("<a href=\"#\"><i class=\"fa fa-times tim\" title=\"Click to reverse\"></i></a>");
  $(".target3").html("<input class=\"span2\" type=\"text\" placeholder=\"\">");
  $(".target1").css("border-color","#DC7633");
  $(".target1").css("border-style","solid");
  $(".target1").css("border-radius","1em");
  $(".target1").css("color","#DC7633");
  $(".target1").css("width","17em");
  //$(".target1").css("margin-left","32em");
  $(".target1").css("margin-bottom","2em");
  $(".target1").css("border-width",".35em");
  $(".subbtn").html("<button class=\"btn btn-lg btn-warning\">Submit</button>");
  //$(".subbtn").css("margin-top","1em");
  $(".ic").empty();
  $(".rand1").empty();
});

$(".ti").click(function(event){
  $("span").empty();
  var i;
  for(i=1;i<=10;i++)
  {
    $(".res"+i).empty();

  }
  $(".target1").css("border-color","");
  $(".target1").css("border-style","");
  $(".target1").css("border-radius","");
  $(".target1").css("color","");
  $(".target1").css("width","");
  $(".target1").css("margin-left","");
  $(".target1").css("border-width","");
  $(".input-prepend").removeClass("target1");
  $(".ic").html("<i class=\"fa fa-search\"></i>");
  $(".rand1").html("Click icon to search");
  var size=$(window).width();
  if(size>=800){
    $(".ele1").css("margin-top","17em");
  }
  else{
    $(".ele1").css("margin-top","12em");
  }
});

var showNo=function(q){
  var i;
  for(i=1;i<=10;i++)
   $(".res"+i).empty();
  $(".res1").html("<p>No results found!!!</p>");
};

var showResult=function(obj){
  var i,title,url,l;
  l=Math.min(10,obj.query.searchinfo.totalhits);
  console.log(l);
  for(i=1;i<=l;i++){
    title=obj.query.search[i].title;
    url=title.replace(/ /g,"_");
    console.log(title);
    $(".res"+i).html("<a href=\"https://en.wikipedia.org/wiki/"+url+"\" target=\'_blank\'>"+title+"<span><h5>"+obj.query.search[i].snippet+"</h5></span>"+"</a><hr>");
  }
};

var v;
$(".subbtn").click(function(event){
   v=$("input").val();
    if(v){
  $(".ele1").css("margin-top","auto");
  var arr=v.split(' ');
  var query=arr.join("+");
  //console.log(query);
   $.ajax(
     {
       url:"https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info&list=search&utf8=1&inprop=url&srsearch="+query,
       dataType: "jsonp",
       success : function(response){
         console.log(response.query);
         if(response.query.searchinfo.totalhits==0){
              //alert("No results found!!");
              showNo(query);
            }
         else{
           //console.log("J");
           showResult(response);
         }
       }
     });
   }
    else{
      alert("Enter text to search");
    }
  });
