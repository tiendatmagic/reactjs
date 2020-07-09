import React, { Component } from 'react';

import './App.css';
import Magic from './Component/Magic';
class App extends Component {
 
  onClick() {
    console.log('Đây là app component');
  }

  onClick2(text) {
    console.log('Đây là app component 2' + text);
  }

  addm =()=> {
    console.log(this.refs.name.value);
  }

  adde = () => {
    alert("OK" + this.refs.email.value);
  }
  render() 
  { 
    // tạo mảng
    var arr = [
      {
      id: 1,
      name: 'Appleee',
      price : 17000000,
      image : 'https://cdn.tgdd.vn/Products/Images/42/214909/samsung-galaxy-note-10-lite-thumb-600x600.jpg',
      status :true,
    },
    {
      id: 2,
      name: 'Oppôo',
      price : 10000000,
      image : 'https://cdn.tgdd.vn/Products/Images/42/214909/samsung-galaxy-note-10-lite-thumb-600x600.jpg',
      status :true,
    },
    {
      id: 3,
      name: 'Lenovo',
      price : 8000000,
      image : 'https://cdn.tgdd.vn/Products/Images/42/214909/samsung-galaxy-note-10-lite-thumb-600x600.jpg',
      status :false,
    },
    {
      id: 4,
      name: 'Lenovo',
      price : 8000000,
      image : 'https://cdn.tgdd.vn/Products/Images/42/214909/samsung-galaxy-note-10-lite-thumb-600x600.jpg',
      status :false,
    },
  ];

  var element = arr.map((arr, index)=> {
    let result = '';
    if (arr.status)
    {
      result =   <Magic 
    key = {arr.id}
    name={arr.name}
    price={arr.price}
    image={arr.image}
    />
    }
    return result;
  });
    

    return (  
<div className="app">
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <ul className="navbar-nav">
    <li className="nav-item active">
      <a className="nav-link" href="#">Active</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link</a>
    </li>
    <li className="nav-item">
      <a className="nav-link disabled" href="#">Disabled</a>
    </li>
  </ul>
</nav>
<div className="container">
  <div className="row">
    <div className="col-sm-4">
        <span>{element}</span>
        </div>
    
    <div className="col-sm-4">
    <Magic 
    name="Samsung"
    price="17000000"
    image="https://cdn.tgdd.vn/Products/Images/42/214909/samsung-galaxy-note-10-lite-thumb-600x600.jpg"
    />
    </div>
    <div className="col-sm-4">
    <Magic 
    name="Samsung"
    price="12000000"
    image="https://cdn.tgdd.vn/Products/Images/42/214909/samsung-galaxy-note-10-lite-thumb-600x600.jpg"
    />
    </div>
    <div className="col-sm-4">
        <button type="button" className="btn btn-primary" onClick={ this.onClick }>Click OK</button>
        <button type="button" className="btn btn-warning" onClick={ () =>{ this.onClick2('a') } }>Click OK</button>
    </div> 
    <div className="mt-3 form-group">
    <label className="alert alert-danger">Thêm sản phẩm</label><br></br>
      <label>Tên sản phẩm</label>
      <input type="text" ref="name" className="form-control"/>
      <input type="text" ref="email" className="form-control"/>
      <input type="submit" className="mt-3 btn btn-danger" onClick={ this.addm} value="Lưu"></input>
      <input type="submit" className="mt-3 btn btn-danger" onClick={ this.adde} value="Lưu"></input>
    </div>
    
      
  </div>
</div>
</div>
    );
  }
}


export default App;
