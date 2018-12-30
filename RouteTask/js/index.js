/*$(".SeeMore").click(function(){
	$(".Freedom-Section").css("display" ,"block");
	$(".create").css("display" ,"block");
})*/




var lis = $(".options ul li");

lis.eq(0).css("backgroundColor","#09c")
lis.eq(1).css("backgroundColor","orange")
lis.eq(2).css("backgroundColor","red")
lis.eq(3).css("backgroundColor","yellowgreen")
lis.eq(4).css("backgroundColor","teal")


lis.click(function(){
    console.log("sa")
})


 lis.click(function(){
	var color  = $(this).css("backgroundColor") // getter
	
	localStorage.setItem("favColor",color)
	$(".change").css("color",color);
})

if(localStorage.getItem("favColor") == null)
	{
		$(".change").css("color","red")
		
	}
else
	{
	
$(".change").css("color",localStorage.getItem("favColor"))

	}


$("#plus").click(function(){

	if($("body").css("fontSize")  > "20px")
		{
		$("body").css("fontSize","20px")
		
		}
	
	$("body").css("fontSize","+=2px")
})

$("#minus").click(function(){
	
	
	$("body").css("fontSize","-=2px")
})



$(".options > i").click(function(){
	
	
	$(".color-options").toggle();
})



$(".Link-Sign").click(function(){
	$(".Div-header-Sign").css("display" ,"block")
	$(".Div-header").css("display" ,"none")
	$(".Div-Form-Sign").css("display" ,"block")
	$(".Div-Form-log").css("display" ,"none")
	$(".Div-pSign").css("display" ,"block")
	$(".Div-p").css("display" ,"none")
	$(".Line").css("height" ,"65vh")
})

$(".Link-Log").click(function(){
	$(".Div-header-Sign").css("display" ,"none")
	$(".Div-header").css("display" ,"block")
	$(".Div-Form-Sign").css("display" ,"none")
	$(".Div-Form-log").css("display" ,"block")
	$(".Div-pSign").css("display" ,"none")
	$(".Div-p").css("display" ,"block")
	$(".Line").css("height" ,"50vh")
})

var x = document.querySelector("#new");

var img = document.querySelectorAll(".OffImg")

x.addEventListener("click",function(){
    for(var i=0; i<img.length;i++)
        {
            img[i].style.display = "block";
        }
})




var y = document.querySelector("#business");

var imgb = document.querySelectorAll(".OffImgb")

y.addEventListener("click",function(){
    for(var i=0; i<imgb.length;i++)
        {
            imgb[i].style.display = "block";
        }
})


var a = document.querySelector("#music");

var imgm = document.querySelectorAll(".OffImgm")

a.addEventListener("click",function(){
    for(var i=0; i<imgm.length;i++)
        {
            imgm[i].style.display = "block";
        }
})



var b = document.querySelector("#rest");

var imgr = document.querySelectorAll(".OffImgr")

b.addEventListener("click",function(){
    for(var i=0; i<imgr.length;i++)
        {
            imgr[i].style.display = "block";
        }
})



var c = document.querySelector("#fashion");

var imgf = document.querySelectorAll(".OffImgf")

c.addEventListener("click",function(){
    for(var i=0; i<imgf.length;i++)
        {
            imgf[i].style.display = "block";
        }
})


var d = document.querySelector("#travel");

var imgt = document.querySelectorAll(".OffImgt")

d.addEventListener("click",function(){
    for(var i=0; i<imgt.length;i++)
        {
            imgt[i].style.display = "block";
        }
})
