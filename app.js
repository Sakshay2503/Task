fetch('./class.json')
.then(res=>res.json())
.then(data=>{
    const cardlist=document.querySelector('.cardlist')
const cards=data.map(item=>`
<div class="card " style="width: 18rem;">
<img src="${item.ImageUrl}" class ="card-img-top"  alt="alv">
<div class="card-body ">
    <h5 >${item.Name}</h5>
    <p class="card-text"> ${item.ShortDesc}</p>
    <a class="btn btn-outline-secondary">View</a>
</div>
</div>
`)
cardlist.innerHTML=cards.join('');
})
.catch(e=>console.log(e))