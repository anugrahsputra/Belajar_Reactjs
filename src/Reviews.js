import React from 'react';
import './App.css';

function ReviewItem(){
  //* Dummy JSON
  const users = [
    {
      "id": 1,
      "name": "Juju Jubaedah",
      "review": "Good shoes, I can fly",
      "image": "https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 2,
      "name": "Seth",
      "review": "Holy shit! This things fly?",
      "image": "https://images.pexels.com/photos/2099225/pexels-photo-2099225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 3,
      "name": "Uehara Ai",
      "review": "Wanna see something good?",
      "image": "https://pbs.twimg.com/profile_images/1471782715888660484/SRNO34GC_400x400.jpg"
    }
  ];
  const listReview = users.map((itemReview) =>
    <div key={itemReview.id} className="Item">
      <img src={itemReview.image} alt="" />
      <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
    </div>
  );

  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReview}
    </div>
  );
}

export default ReviewItem;