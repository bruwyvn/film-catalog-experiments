import React from "react";

const About = () => {
  return (
    <div className="container mx-auto min-h-screen py-10 px-4">
      <h1 className="mb-4 text-4xl font-bold">About Us</h1>
      <p className="mb-8 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus
        nunc eu eros commodo, ut facilisis nulla aliquam. Nunc varius augue eu
        lorem sagittis, non suscipit quam euismod. Nulla facilisi. Nullam vel
        magna purus. Donec lobortis nisi in est tristique rutrum.
      </p>
      <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
      <p className="mb-8 text-lg">
        Fusce hendrerit metus eu odio maximus convallis. Aliquam sit amet ex
        enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia curae; Vestibulum auctor nibh arcu, eu consequat metus
        facilisis vel. Vivamus convallis ex eu urna accumsan molestie.
      </p>
      <h2 className="mb-4 text-2xl font-bold">Our Team</h2>
      <ul className="mb-8 text-lg">
        <li>John Doe - CEO</li>
        <li>Jane Smith - Marketing Manager</li>
        <li>Mark Johnson - Developer</li>
      </ul>
      <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
      <p className="text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        efficitur, ipsum sed fringilla ultricies, ex eros rhoncus augue, quis
        bibendum orci ex ut mauris. Nulla facilisi. Nullam et justo id ante
        commodo commodo ac sit amet felis.
      </p>
      <p className="text-lg">
        Email: info@example.com <br />
        Phone: 555-1234 <br />
        Address: 123 Main St, Anytown USA
      </p>
    </div>
  );
};

export default About;
