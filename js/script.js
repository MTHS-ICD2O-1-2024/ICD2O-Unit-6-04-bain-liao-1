// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Bain Liao
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

function calculateVolumeOfSphere() {
  // this calculates the volume of a sphere

  const params = new URLSearchParams(document.location.search)

  // input
  const radiusOfSphere = params.get('radius-of-sphere')
  console.log(radiusOfSphere)

  // proccess
  const volumeOfSphere = (4 / 3) * (Math.PI) * (radiusOfSphere ** 3)
  const radius = radiusOfSphere

  // output
  document.getElementById('volume').innerHTML = "Volume is: " + volumeOfSphere.toFixed(2) + "mm³"
  document.getElementById('radius-of-sphere').innerHTML = radius
  
}

// On page load, display radius
window.onload = function() {
  document.getElementById('radius-of-sphere').innerHTML = 0 + "mm"
  document.getElementById('volume').innerHTML = "Volume is: " + 0 + "mm³"
}
