import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="p-3 text-center">
      <div>
        <Link
          to="https://github.com/leandromichelena/eye-spy?tab=readme-ov-file#contributors"
          className="font-color text-decoration-none"
        >
          Meet The Developers
        </Link>
        <div>&copy; Eye Spy 2022</div>
      </div>
    </footer>
  );
}

export default Footer;
