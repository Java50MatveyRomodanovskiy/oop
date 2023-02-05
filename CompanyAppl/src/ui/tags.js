export class Tags{
 //#tagsElements

constructor(tags, parentId){
    const parentElement = document.getElementById(parentId);
        if (!parentElement) {
            throw `wrong parentId ${parentId}`
        }
    parentElement.innerHTML = tags.map(element => `<button id="${element.nameSection}" class="show-button">${element.nameSection}</button>`).join('');
    tags.forEach(tag => document.getElementById(tag.id).style.display = 'none');
    
}
showSection(tags){
   const btns = document.querySelectorAll(".show-button");
   btns.forEach(eventFunction);
   function eventFunction(btn, index) {
    btn.addEventListener('click', function(e) {
        tags.forEach(tag => document.getElementById(tag.id).style.display = 'none');
        btns.forEach(btn => {
            btn.style.backgroundColor = "buttonface";
            btn.style.color = 'buttontext';
        });
        document.getElementById(tags[index].id).style.display = '';
        e.target.style.backgroundColor = 'rgb(170, 196, 225)';
        e.target.style.color = 'white';
  }) 
}
}
}






