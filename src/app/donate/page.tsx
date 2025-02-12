import React from "react";
const Donate = () =>{
    return (
        <div>
        <h1 className="text-1g font-bold mb-4">Support Your Community-Donate Today</h1>
          <p>"Your donation helps stock local community pantries and ensures that no one goes hungry. Every contribution makes a difference!"</p>
          <p>email:pantryPal@example.com</p>

          <button className="flex justify-center bg-blue-500 text-white py-2 rounded-2g text-lg font-semibold hover:bg-green-600 transition">
          Donate Now
          </button>


        <h1 className="text-1g font-bold">Other Ways to Help</h1>
        <li>Donate food items to a nearby pantry</li>
        <li>Volunteer to help distribute meals</li>
        <li>Share our mission with friends and family</li>
        </div>
    );
};

export default Donate;