//your code here!

//your code here!
let infiList=document.querySelector('#infi-list')
let count=10;
var k=1;
addListItem(count)

function addListItem(count)
{
    for(let i=1;i<=count;i++)
    {
        const listitem=document.createElement('li')
        listitem.textContent="Item "+(1+infiList.childElementCount);
        infiList.appendChild(listitem)
    }
  
}

infiList.addEventListener("scroll",()=>
{   
    const scrollHeight=document.documentElement.scrollHeight;
    const scrollTop=document.documentElement.scrollTop;
    const clientHeight=document.documentElement.clientHeight;
   
    if( scrollHeight <= scrollTop+ clientHeight )
   {
    // console.log("bottom")
    addListItem(2);
    
   }
})