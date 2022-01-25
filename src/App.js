/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ReviewItem from './Reviews';
import PropTypes from 'prop-types';


function App() {
  return (
    <div className="ParrentBox">
      <FotoProduk />
      <ProdukInfo name = "Pala Bapak Kau" category = "Sneaker" isDiscount = "yes" />
      <ReviewItem/>
      

    </div>
  );
}


function FotoProduk(){
  return (
    <div className="Foto">
        <img src="good_shoes.jpg" alt="" />
    </div>
  );
}


function CheckDiscount(props){
  const {isDiscount, discount} = props;
  if (isDiscount === "yes") {
    return (
      <p>Discount {discount}% off</p>
    );
    } else if (isDiscount === "coming") {
    return (
      <p>Discount coming soon</p>
    );
  }else {
    return(
      <p>Belum ada Discount</p>
    );
  }
}


function ProdukInfo(props){
 
  const {category, name, isDiscount} = props;
  const price = 1250000;
  const benefits = ["Tidak kusut terkena air", "Bahan lebih halus", "Bisa terbang"];
  const listBenefits = benefits.map((itemBenefits) =>
    <li key={itemBenefits}>{itemBenefits}</li>
  );

  return (
    <div>
      <div className="Deskripsi">
        <p className="Title">{name}</p>
        <p className="Cate">{category}</p>
        <p className="Price">IDR {price}</p>
        <CheckDiscount isDiscount = {isDiscount} discount = {50}/>
        <p className="Info">
          The best shoes you can ever have in this world! Buy it now!
        </p>
        <ul>
          {listBenefits}
        </ul>
        <a onClick={(e) => TambahCart(name, e)}  href="#">Add to Cart</a>
      </div>
    </div>
  );
}


function TambahCart(e){
  return console.log("Membeli produk " + e);
}


CheckDiscount.propTypes = {
  discount: PropTypes.number
};


export default App;
