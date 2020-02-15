function upDate(previewPic){

        var imgsrc = previewPic.getAttribute("src");
        var imgalt = previewPic.getAttribute("alt");
        document.getElementById('image').style.backgroundImage = "url('" + imgsrc + "')";
        document.getElementById('image').innerHTML = imgalt;

       }
   
function unDo(){

        a = document.getElementById('image');
        a.style.backgroundImage = "url('')";
        document.getElementById('image').innerHTML = "Hover over an image below to display here";
  
       }