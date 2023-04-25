import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Company Information</h3>
            <p>GameGo is the world's largest video game retailer. With over 6,100 stores located throughout the United States and 17 countries, we are the retail destination for gamers around the world.
Together, we hold a passion for gaming, a commitment to our industry and a disciplined business perspective to continuously drive value with shareholders, customers, vendors and employees.</p>
          </div>
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <ul className="contact">
              <li><i className="fa fa-map-marker"></i>123 Main Street, Suite 101</li>
              <li><i className="fa fa-phone"></i>(555) 555-5555</li>
              <li><i className="fa fa-envelope"></i>info@company.com</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <hr />
            <div className="text-center">
              <p>For Keyin College, Winter 2023 Final Sprint by Team 2.</p>
              <p>&copy; 2023 Company Name. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}