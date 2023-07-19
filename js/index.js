var bookMarkName = document.getElementById("bookMarkName") ;
var webSiteUrl = document.getElementById("webSiteUrl") ;

var Container =[]

if(localStorage.getItem("book mark") != null)
{
Container= JSON.parse(localStorage.getItem("book mark")) ;
displayBookMark(Container);
}

function addBookMark()
{
  
    var product  = {
        bookname:bookMarkName.value,
        url:webSiteUrl.value
    }
    if(bookMarkName.value===''||webSiteUrl.value===''){
        alert("please enter right input")
    return 0;
    }
    else {
     Container.push(product);//3
    localStorage.setItem("book mark", JSON.stringify(Container));
    displayBookMark (Container);
    clearForm ();
   
    } 
  


}

function displayBookMark (x)
{
    var cartona=``;
    for( var i=0; i<Container.length ; i++ )
    {
        cartona+=` 
        <tr>
        <td> ${Container[i].bookname}</td>
        <td><button class="about-button "><a class="anc-decor" target="_blank" href=${"http://"+Container[i].url}> visit</a> </button></td>
        <td><button onclick="deleting (${i})"  class="about-button " > delete </button></td>
        </tr>
         `
  
    }

    document.getElementById("tableBody"). innerHTML= cartona;

}

function deleting (i)
{
Container.splice(i,1);
localStorage.setItem("book mark",JSON.stringify(Container));
displayBookMark (Container);
}

function clearForm ()
{
    bookMarkName.value="";
    webSiteUrl.value=""
}








// ${Container[i].bookname}
// ${Container[i].url}