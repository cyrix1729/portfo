import { useMemo } from 'react';
import * as THREE from 'three';

const screen = (textArray) => {
  return useMemo(() => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const lineHeight = 50; // Height for each line of text
    canvas.width = 1000;
    canvas.height = 1000;

    context.fillStyle = 'green';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = '350px Arial ';
    context.fillStyle = 'yellow';
    context.textAlign = 'left';
    context.textBaseline = 'middle';

    const lines = [];
    const maxWidth = canvas.width * 1; // Set a max width to 80% of canvas width

    // Function to handle text wrapping
    const wrapText = (text) => {
      const words = text.split(' ');
      let currentLine = words[0];

      for (let i = 1; i < words.length; i++) {
        const word = words[i];
        const width = context.measureText(currentLine + " " + word).width;
        if (width < maxWidth) {
          currentLine += " " + word;
        } else {
          lines.push(currentLine);
          currentLine = word;
        }
      }
      lines.push(currentLine);
    };

    // Process each line in textArray
    textArray.forEach((line) => {
      if (line.trim() === '') {
        lines.push(''); // Preserve empty lines for formatting
      } else {
        wrapText(line);
      }
    });

    // Calculate the starting Y position to center the text block vertically
    const blockHeight = lines.length * lineHeight;
    let startY = (canvas.height - blockHeight) / 2 + lineHeight / 2;

    // Render each wrapped line
    lines.forEach((line, index) => {
      context.fillText(line, canvas.width / 40, startY + index * lineHeight);
    });

    return new THREE.CanvasTexture(canvas);
  }, [textArray]); // Dependency array to recreate the texture when textArray changes
};

export default screen;
