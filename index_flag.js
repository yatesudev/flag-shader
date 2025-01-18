"use strict";

document.addEventListener("DOMContentLoaded", startGame, false);

function startGame() {
  if (BABYLON.Engine.isSupported()) {
    var canvas = document.getElementById("renderCanvas");
    var engine = new BABYLON.Engine(canvas, false);
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera(
      "Camera",
      -Math.PI / 3,
      Math.PI / 4,
      20,
      BABYLON.Vector3.Zero(),
      scene
    );
    camera.attachControl(canvas);

    // Creating flag
    var flag = BABYLON.Mesh.CreateGround("Flag", 10, 10, 32, scene, true);

    var flagMaterial = new BABYLON.ShaderMaterial(
      "flag",
      scene,
      {
        vertexElement: "vertexShaderCode",
        fragmentElement: "fragmentShaderCode",
      },
      {
        attributes: ["position", "normal", "uv"],
        uniforms: [
          "worldViewProjection",
          "world",
          "time",
          "waveHeight",
          "waveLength",
          "waveSpeed",
          "blendFactor",
          "edgeDetectionEnabled",
          "edgeStrength",
        ],
      }
    );

    flagMaterial.setTexture(
      "textureSampler1",
      new BABYLON.Texture("assets/earth.jpg", scene)
    );
    flagMaterial.setTexture(
      "textureSampler2",
      new BABYLON.Texture("assets/moon.jpg", scene)
    );

    var time = 0.0;
    var waveHeight = 0.5;
    var waveLength = 5.0;
    var waveSpeed = 1.0;
    var blendFactor = 0.5;
    var edgeDetectionEnabled = true;
    var edgeStrength = 1.0;

    flagMaterial.setFloat("time", time);
    flagMaterial.setFloat("waveHeight", waveHeight);
    flagMaterial.setFloat("waveLength", waveLength);
    flagMaterial.setFloat("waveSpeed", waveSpeed);
    flagMaterial.setFloat("blendFactor", blendFactor);
    flagMaterial.setFloat("edgeDetectionEnabled", edgeDetectionEnabled ? 1.0 : 0.0);
    flagMaterial.setFloat("edgeStrength", edgeStrength);

    flag.material = flagMaterial;

    // GUI Controls
    document.getElementById("waveHeightSlider").addEventListener("input", function (e) {
      waveHeight = parseFloat(e.target.value);
      flagMaterial.setFloat("waveHeight", waveHeight);
    });

    document.getElementById("waveLengthSlider").addEventListener("input", function (e) {
      waveLength = parseFloat(e.target.value);
      flagMaterial.setFloat("waveLength", waveLength);
    });

    document.getElementById("waveSpeedSlider").addEventListener("input", function (e) {
      waveSpeed = parseFloat(e.target.value);
      flagMaterial.setFloat("waveSpeed", waveSpeed);
    });

    document.getElementById("blendFactorSlider").addEventListener("input", function (e) {
      blendFactor = parseFloat(e.target.value);
      flagMaterial.setFloat("blendFactor", blendFactor);
    });

    document.getElementById("edgeDetectionCheckbox").addEventListener("change", function (e) {
      edgeDetectionEnabled = e.target.checked;
      flagMaterial.setFloat("edgeDetectionEnabled", edgeDetectionEnabled ? 1.0 : 0.0);
    });

    document.getElementById("edgeStrengthSlider").addEventListener("input", function (e) {
      edgeStrength = parseFloat(e.target.value);
      flagMaterial.setFloat("edgeStrength", edgeStrength);
    });

    engine.runRenderLoop(function () {
      flagMaterial.setFloat("time", time);
      time += 0.016;
      scene.render();
    });
  }
}
