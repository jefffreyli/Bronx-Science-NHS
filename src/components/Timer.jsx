import React, { Component } from "react";
import "../scripts/timer.js"

export default function Timer() {
  return (
    <div class="countdown">
        <div class="box">
            <span class="num" id="day-box">00</span>
            <span class="text">Days</span>
        </div>
        <div class="box">
            <span class="num" id="hr-box">00</span>
            <span class="text">Hours</span>
        </div>
        <div class="box">
            <span class="num" id="min-box">00</span>
            <span class="text">Minutes</span>
        </div>
        <div class="box">
            <span class="num" id="sec-box">00</span>
            <span class="text">Seconds</span>
        </div>
    </div>
  );
}