import { useEffect, useRef } from 'react';

const Donut = () => {
  const donutRef = useRef();

  useEffect(() => {
    const container = donutRef.current;

    const screenWidth = 80; // Adjusted for wider donut
    const screenHeight = 65;

    const R1 = 1;
    const R2 = 2;
    const K2 = 7;
    const K1 = (screenWidth * K2 * 3) / (8 * (R1 + R2));
    const thetaSpacing = 0.07;
    const phiSpacing = 0.02;

    const M = Math;
    const ASCII = '.,-~:;aRiSF@';

    let A = 1;
    let B = 1;
    const ROTATION_SPEED = 0.01;

    const donut = () => {
      A += ROTATION_SPEED;
      B += ROTATION_SPEED;

      const output = [];
      const zBuffer = [];

      for (let k = 0; k < screenWidth * screenHeight; k++) {
        if (k % screenWidth === screenWidth - 1) output[k] = '\n';
        else output[k] = ' ';
        zBuffer[k] = 0;
      }

      const cosA = M.cos(A);
      const sinA = M.sin(A);
      const cosB = M.cos(B);
      const sinB = M.sin(B);

      for (let theta = 0; theta < 2 * M.PI; theta += thetaSpacing) {
        const cosTheta = M.cos(theta);
        const sinTheta = M.sin(theta);

        for (let phi = 0; phi < 2 * M.PI; phi += phiSpacing) {
          const cosPhi = M.cos(phi);
          const sinPhi = M.sin(phi);

          const circleX = R2 + R1 * cosTheta;
          const circleY = R1 * sinTheta;

          const x =
            circleX * (cosB * cosPhi + sinA * sinB * sinPhi) - circleY * cosA * sinB;
          const y =
            circleX * (sinB * cosPhi - sinA * cosB * sinPhi) + circleY * cosA * cosB;
          const z = K2 + cosA * circleX * sinPhi + circleY * sinA;
          const oZ = 1 / z;

          const xP = M.floor(screenWidth / 2 + K1 * oZ * x);
          const yP = M.floor(screenHeight / 2 - K1 * oZ * y);

          const L =
            cosPhi * cosTheta * sinB -
            cosA * cosTheta * sinPhi -
            sinA * sinTheta +
            cosB * (cosA * sinTheta - cosTheta * sinA * sinPhi);
          const index = xP + screenWidth * yP;

          if (oZ > zBuffer[index]) {
            zBuffer[index] = oZ;

            const luminanceIndex = M.floor(L * 8);

            output[index] = ASCII[luminanceIndex > 0 ? luminanceIndex : 0];
          }
        }
      }

      container.innerHTML = output.join('');
      requestAnimationFrame(donut);
    };

    requestAnimationFrame(donut);
  }, []);

  return (
    <div className = 'donut'>
      <pre ref={donutRef} style={{ whiteSpace: 'pre' }}></pre>
    </div>
  );
};

export default Donut;