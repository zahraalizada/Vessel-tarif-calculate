
const row = document.querySelector('.row');
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json =>

        json.map((item) => {

            row.innerHTML += `
    <div class="col-12 col-lg-3 mb-5">
      <a href="#" class="card py-3">
        
        <div class="img-box">
            <img src="${item.image}" alt="product" >
       </div>
        <div class="card-body card-height">
          <h5 class="card-title truncate">${item.title}</h5>
          <p class="card-text truncate"> ${item.description.slice(0, 40)}...</p>
          <h6 class="card-text truncate">${item.category}</h6>
          <div>
            <span class="card-text"><i class="bi bi-star-fill me-1"></i> ${item.rating.rate}</span>
            <span class="card-text">${item.rating.count} </span>
          </div>
         
          <span class="text-success fs-1 fw-bold">${item.price}$</span>
        </div>
      </a>
    </div>
`

        })




    )





