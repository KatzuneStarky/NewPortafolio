import React, { useEffect } from "react";
import { FaPlus, FaHome } from "react-icons/fa";
import { AiFillContacts, AiFillFolder } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";

function Header() {
    useEffect(() => {
        const nav = document.querySelector("nav")
        const toggleBtn = document.querySelector(".toggle-btn")

        toggleBtn.addEventListener("click", () => {
            nav.classList.toggle("open")
        })

        const onDrag = ({ movementY }) => {
            const navStyle = window.getComputedStyle(nav),
                navTop = parseInt(navStyle.top),
                navHeight = parseInt(navStyle.height),
                windHeight = window.innerHeight

            nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px"
            if (navTop > windHeight - navHeight) {
                nav.style.top = `${windHeight - navHeight}px`
            }
        }

        nav.addEventListener("mousedown", () => {
            nav.addEventListener("mousemove", onDrag)
        })

        nav.addEventListener("mouseup", () => {
            nav.removeEventListener("mousemove", onDrag)
        })

        nav.addEventListener("mouseleave", () => {
            nav.removeEventListener("mousemove", onDrag)
        })
    }, [])

    return (
        <nav>
            <div className="nav-content">
                <div className="toggle-btn">
                    <FaPlus />
                </div>
                <span style={{ "--i": 4 }}>
                    <Link to={"/"}>
                        <i>
                            <FaHome />
                        </i>
                    </Link>
                </span>

                <span style={{ "--i": 3 }}>
                    <Link to={"/profolio"}>
                        <i>
                            <AiFillFolder />
                        </i>
                    </Link>
                </span>

                <span style={{ "--i": 2 }}>
                    <Link to={"/about"}>
                        <i>
                            <FcAbout />
                        </i>
                    </Link>
                </span>

                <span style={{ "--i": 1 }}>
                    <Link to={"/contact"}>
                        <i>
                            <AiFillContacts />
                        </i>
                    </Link>
                </span>
            </div>
        </nav>
    );
}

export default Header;
