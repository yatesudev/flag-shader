# Babylon.js Flag Shader

This project uses Babylon.js to render an animated flag with custom shaders. The flag's movement is driven by a sine wave, and the textures can be blended dynamically. Additionally, edge detection via a Sobel filter is applied to enhance the flag's details. The project provides an interactive GUI to adjust several parameters in real-time, such as wave height, wave length, wave speed, and edge detection strength.

![Screenshot 2025-01-18 101121](https://github.com/user-attachments/assets/c19e7854-51a7-4de9-821b-c74bb0b3564f)

## Features

- **Wave Animation**: Flag is animated with a sine wave and adjustable parameters:
  - Wave Height
  - Wave Length
  - Wave Speed
- **Texture Blending**: Blend two textures to create dynamic effects on the flag.
- **Edge Detection**: Sobel filter used to detect and highlight edges in the flag's texture.
- **Interactive GUI**: Users can control various parameters through an on-screen GUI, including sliders and checkboxes.

## Installation

1. Clone the repository or download the project files:

   ```bash
      git clone https://github.com/yatesudev/flag-shader.git
   ```

2. Ensure you have a local web server to view the files. You can use simple tools like live-server or any other server to serve the project.

3. Open the index_flag.js file in your browser.

## Usage

### Shader Parameters

The flag's behavior is controlled via custom vertex and fragment shaders. Key parameters include:

- **Wave Height (`waveHeight`)**: Controls the amplitude of the sine wave that deforms the flag.
- **Wave Length (`waveLength`)**: Determines the wavelength of the sine wave for the flag's movement.
- **Wave Speed (`waveSpeed`)**: Adjusts the speed of the wave's motion.
- **Blend Factor (`blendFactor`)**: Sets the blending ratio between the two textures applied to the flag.
- **Edge Detection (`edgeDetectionEnabled`)**: Enables or disables the Sobel filter for edge detection.
- **Edge Strength (`edgeStrength`)**: Controls the strength of the edge detection effect.

### GUI Controls

The user interface provides the following controls:

- **Wave Height Slider**: Adjust the height of the wave animation.
- **Wave Length Slider**: Adjust the distance between the waves.
- **Wave Speed Slider**: Adjust the speed of the wave motion.
- **Blend Factor Slider**: Adjust the blending between the two textures.
- **Edge Detection Checkbox**: Enable or disable the edge detection effect.
- **Edge Strength Slider**: Adjust the intensity of the edge detection.

