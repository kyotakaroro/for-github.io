
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","articles.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;

var articles = xmlDoc.getElementsByTagName("article");

showAllTitles();

function showAllTitles(){
  var titlesHTML = Array.from(articles).map(function(article,index) {
    var title = article.getElementsByTagName("title")[0].childNodes[0].nodeValue;
    var type = article.getElementsByTagName("type")[0].childNodes[0].nodeValue;

    return "<a href='javascript:void(0);' onclick='openDisplayPage(" + index + ");'"+ "type="+type+">" + title + "</a>"; 
}).join(""); 

document.getElementById("show-article-title").innerHTML = titlesHTML;
}


function openDisplayPage(index) {

  window.open('subpage.html?index=' + index, '_blank').focus();
  }

  function filterArticlesByType(type) {
    var filteredTitlesHTML = Array.from(articles).filter(function(article) {
        var articleType = article.getElementsByTagName("type")[0].childNodes[0].nodeValue;
        return articleType === type;
    }).map(function(article, index) {
        var title = article.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        return "<a href='javascript:void(0);' onclick='openDisplayPage(" + index + ");' type='" + type + "'>" + title + "</a>"; 
    }).join("");

    document.getElementById("show-article-title").innerHTML = filteredTitlesHTML;
}






