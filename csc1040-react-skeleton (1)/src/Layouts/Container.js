// src/Layouts/Container.js
import { Outlet, Link } from "react-router-dom";
import Navbar from '../components/Navbar'; // ✅ Import the real Navbar

export default function Container() {
    return (
        <div>
            <Navbar /> {/* ✅ Insert the Navbar at the top */}
            <div id="container">
                <Outlet /> {/* ✅ This is where the inner pages render */}
            </div>
        </div>
    );
}
