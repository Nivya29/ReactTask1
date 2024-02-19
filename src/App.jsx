import React from 'react';
import Cards from './components/Cards';
import './App.css';
import './index.css';

const App = () => {
  const data = [
    {title: "FREE",
    price: "$0/month",
    user: "Single User",
    storage: "50GB Storage",
    public: "Unlimited Public Projects",
    access:"Community Access",
    private:"text-muted",
    projectIcon: "fas fa-times",
    phone:"text muted",
    phoneIcon: "fas fa-times",
    subDomain:"text muted",
    subIcon: "fas fa-times", 
    reports:"text muted",
    monthlyIcon: "fas fa-times"
     },
    {title: "PLUS",
    price: "$9/month",
    user: "5 Users",
    storage: "50GB Storage",
    public: "Unlimited Public Projects",
    access:"Community Access",
    private:"",
    projectIcon: "fa-sharp fa-solid fa-check",
    phone:"",
    phoneIcon: "fa-sharp fa-solid fa-check",
    subDomain:"",
    subIcon: "fa-sharp fa-solid fa-check", 
    reports:"text-muted",
    monthlyIcon: "fas fa-times"
    },
    {
      title: "PRO",
    price: "$49/month",
    user: "Unlimited Users",
    storage: "50GB Storage",
    public: "Unlimited Public Projects",
    access:"Community Access",
    private:"",
    projectIcon: "fa-sharp fa-solid fa-check",
    phone:"",
    phoneIcon: "fa-sharp fa-solid fa-check",
    subDomain:"",
    subIcon: "fa-sharp fa-solid fa-check", 
    reports:"",
    monthlyIcon: "fa-sharp fa-solid fa-check"
    },
  ]
  return (
    <div>
      <h1 className='heading'>React Price Card Task</h1>
      <Cards data={data} />
    </div>
  );
};

export default App;