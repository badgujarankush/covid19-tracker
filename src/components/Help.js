import React from "react";

import "./Help.css";

const Help = (props) => {
  return (
    <div class="h-card">

<div class="s-card contact">
             <div class="title">
                 <h4>Helpline</h4>
             </div>
      
                <div class="info">
                    <ul>
                      <li>Number         : +91-11-23978046</li>
                      <li>Health Ministry: 1075</li>
                      <li>Child          : 1098</li>
                      <li>Mental Health  : 08046110007</li>
                      <li>Senior Citizens: 14567</li>
                    </ul>
                </div>
         </div>



      <div class="s-card">
        <div class="title">
          <h4>Symptoms</h4>
        </div>

        <div class="info">
          <h5>Most Common Symptoms</h5>
          <ul>
            <li>Fever</li>
            <li>Dry Cough</li>
            <li>Tiredness</li>
            <li>Loss of taste and smell</li>
            <li>Sore Throat</li>
          </ul>
          <h5>Serious Symptoms</h5>
          <ul>
            <li>Difficulty breathing or shortness of breath</li>
            <li>Chest pain or pressure</li>
            <li>Loss of speech or movement</li>
          </ul>
        </div>
      </div>

      <div class="s-card contact">
             <div class="title">
                 <h4>Prevention</h4>
             </div>
      
                <div class="info">
                    <ul>
                      <li>Wash Your Hands Often</li>
                      <li>Wear A Mask</li>
                      <li>Use Alcohol Based Sanitizer</li>
                      <li>Keep Distance</li>
                      <li>Stay Home Stay Safe</li>
                    </ul>
                </div>
         </div>

      
    </div>
  );
};

export default Help;
