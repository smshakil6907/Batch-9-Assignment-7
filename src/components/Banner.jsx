import React from "react";

export default function Banner() {
  return (
    <div
      className="hero min-h-screen rounded-2xl"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/n8qDKST/pexels-ella-olsson-572949-1640773.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold">
            Discover an exceptional cooking class tailored for you
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="space-x-6">
            <button className="btn btn-primary">Explore Now</button>
            <button className="btn btn-primary">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
}
