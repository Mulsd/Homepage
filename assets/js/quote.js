$(document).ready(function(){

  	if(location.href.indexOf(atob("d2p5Lmlt")) == -1){
		location.href = atob("aHR0cHM6Ly93ankuaW0=");
	}
	var content="";
	var author="";
	var getQuote = function(){
		$.getJSON("https://v1.hitokoto.cn/?c=a&encode=json",function(json){
			content = json["hitokoto"];
			author = json["from"];
			//console.log(content+"_"+author);

			$(".quote-content").html("「 "+content+" 」");
			$(".quote-author").html("——"+author);
		});
	}

	getQuote();

});
