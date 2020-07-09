import React, { Component } from 'react';

class Magic extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.addcard = this.addcard.bind(this);
    }
    
    addcard () {
        alert(this.props.name + ' ' + ' Giá: ' + this.props.price);
        
    }

    addcard2 =()=> {
        alert(this.props.name + ' ' + ' Giá: ' + this.props.price);
        
    }
    render() {
        return(
            <div className="Magic">
            <div className="card">
            <img className="card-img-top" src={ this.props.image } alt="Card image"/>
            <div className="card-body">
            <h4 className="card-title">{this.props.name}</h4>
            <p className="card-text">{this.props.price} VNĐ</p>
                <a className="btn btn-primary" onClick={ this.addcard }>Mua</a>
                <a className="ml-3 btn btn-primary" onClick={ this.addcard2 }>Thêm vào giỏ hàng</a>
            </div>
            </div>

            
            </div>
            
        );
    }
}

export default Magic;