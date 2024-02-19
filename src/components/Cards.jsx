import React from 'react';

const Cards = ({data}) => {
    return (
        <div className="container1">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {data.map((item,index)=>{
                return(
                    <>
                    <div key={index}>
                    <div className="col">
    <div className="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.price}</p><hr></hr>
        <ul className="fa-ul">
        <li><span className="fa-sharp fa-solid "><i className="fa-sharp fa-solid fa-check"></i></span>{item.user}</li>
        <li><span className="fa-sharp fa-solid"><i className="fa-sharp fa-solid fa-check"></i></span>{item.storage}</li>
        <li> <span className="fa-sharp fa-solid"><i className="fa-sharp fa-solid fa-check"></i></span>{item.public}</li>
        <li> <span className="fa-sharp fa-solid"><i className="fa-sharp fa-solid fa-check"></i></span>{item.access}</li>
        <li><span className="fa-duotone"><i class={item.projectIcon}></i></span>Unlimited Public Projects</li>
        <li> <span className="fa-duotone"><i class={item.phoneIcon}></i></span>Dedicated Phone Support</li>
        <li> <span className="fa-duotone"><i class={item.subIcon}></i></span>Free Subdomain</li>
        <li> <span className="fa-duotone"><i class={item.monthlyIcon}></i></span>Monthly Status Reports</li>
        </ul>
        <div className="d-grid">
        <a href="#" className="btn btn-primary text-uppercase">Button</a>
      </div>
      </div>
      
    </div>
  </div>
                    </div>
                    </>
                )
              })}

 

</div>
        </div>
    );
};

export default Cards;