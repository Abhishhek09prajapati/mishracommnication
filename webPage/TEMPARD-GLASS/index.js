let batterystock = document.getElementById('batterstock');

fetch('https://api.npoint.io/ecccc07e4a1fcb159b26')
    .then(res => res.json())
    .then(data => {
        data.TEMPARDGLASS.name.forEach((item, index) => {
            var div = document.createElement('div');
            div.classList.add("stock");
           var nameitems = document.createElement('p')
           var itemmrp = document.createElement('div')
           var itmesrate = document.createElement('div')

           itemmrp.innerHTML =` MRP : ${data.TEMPARDGLASS.mrp[index]}`
           itmesrate.innerHTML =` Rate : ${data.TEMPARDGLASS.rate[index]}`
            
            var image = document.createElement('img');
            image.classList.add("stockimg")
            image.src = data.TEMPARDGLASS.image[index];


            nameitems.innerHTML = data.TEMPARDGLASS.name[index];

            div.appendChild(image);
            div.appendChild(nameitems)
             div.appendChild(itemmrp)
             div.appendChild(itmesrate)
            batterystock.appendChild(div);
            

            div.addEventListener("click",()=>{
               var dataone = {
                "itemsname":  item,
                "itemsmrp":data.TEMPARDGLASS.mrp[index],
                "name":"",
                "whatappnumber": data.mishracommnication[1]
        
               };
               dataone.name = prompt("Enter Your Name","");
               
               window.location.href = `https://wa.me/${dataone.whatappnumber}?text=Hello%20Sir%20${dataone.name}%20I%20Need%20this%20${dataone.itemsname}%20of%20${dataone.itemsmrp}`
              

            })
        });
    })
    .catch(ee => {
        console.log(ElementInternals)
    })