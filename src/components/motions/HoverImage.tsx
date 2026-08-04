"use client";

import { useEffect, useRef } from "react";
// import button from "@/"

import {
  Renderer,
  Camera,
  Transform,
  Plane,
  Mesh,
  Texture,
  Program,
} from "ogl";

export default function HoverImage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const renderer = new Renderer({
      canvas: canvasRef.current,
      alpha: true,
      dpr: Math.min(window.devicePixelRatio, 2),
    });

    const gl = renderer.gl;

    const camera = new Camera(gl);

    camera.position.z = 1;

    camera.lookAt([0, 0, 0]);

    const scene = new Transform();

    const mouse = {
      x: 0,
      y: 0,
    };

    const targetMouse = {
      x: 0,
      y: 0,
    };

    const canvas = canvasRef.current;

    canvas.addEventListener("mousemove", (event) => {
      const rect = canvas.getBoundingClientRect();

      targetMouse.x = (event.clientX - rect.left) / rect.width;

      targetMouse.y = 1 - (event.clientY - rect.top) / rect.height;
    });

    canvas.addEventListener("mouseleave", () => {
      targetMouse.x = 0.5;
      targetMouse.y = 0.5;
    });

    const img = new Image();

    img.src =
      "https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,w_1000,h_1000,c_fit/v1770996714/everything_picture_n8hl0i.jpg";
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const texture = new Texture(gl, {
        image: img,
      });

      const geometry = new Plane(gl, {
        width: 2,
        height: 2,
      });

      const program = new Program(gl, {
        uniforms: {
          uTexture: {
            value: texture,
          },

          uMouse: {
            value: [0.5, 0.5],
          },

          uTime: {
            value: 0,
          },
        },

        vertex: `

          attribute vec2 uv;

          varying vec2 vUv;


          void main(){

            vUv = uv;

            gl_Position =
              vec4(position,1.0);

          }

        `,

        fragment: `

          precision highp float;


          uniform sampler2D uTexture;

          uniform vec2 uMouse;

          uniform float uTime;


          varying vec2 vUv;



          void main(){


            vec2 uv = vUv;


            float dist =
              distance(
                uv,
                uMouse
              );



            float strength =
              smoothstep(
                0.4,
                0.0,
                dist
              );



            uv.x +=
              sin(
                uv.y * 20.0 +
                uTime
              )
              *
              strength
              *
              0.03;



            uv.y +=
              cos(
                uv.x * 20.0 +
                uTime
              )
              *
              strength
              *
              0.03;



            vec4 color =
              texture2D(
                uTexture,
                uv
              );



            gl_FragColor=color;


          }

        `,
      });

      const mesh = new Mesh(gl, {
        geometry,
        program,
      });

      mesh.setParent(scene);

      function resize() {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        renderer.setSize(width, height);

        camera.perspective({
          aspect: width / height,
        });
      }

      resize();

      window.addEventListener("resize", resize);

      function animate(time: number) {
        requestAnimationFrame(animate);

        mouse.x += (targetMouse.x - mouse.x) * 0.08;

        mouse.y += (targetMouse.y - mouse.y) * 0.08;

        program.uniforms.uMouse.value = [mouse.x, mouse.y];

        program.uniforms.uTime.value = time * 0.001;

        renderer.render({
          scene,
          camera,
        });
      }

      animate(0);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        w-full
        h-full
        block
      "
    />
  );
}
