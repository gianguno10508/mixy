import React, { useEffect, useRef, useState } from 'react';
import { headerCategory2, headerCategory3 } from '../assets/fakedata/CategoryHeader';
import HeaderBottom from './Header/HeaderBottom';
import HeaderTop from './Header/HeaderTop';
import Headerwapper from './Header/Headerwapper';
import '../assets/css/header.css';
function Header1(props) {
    const [scrollDirection, setScrollDirection] = useState(false);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            setScrollDirection(window.scrollY > 40);
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]);

    const [showDropdown, setShowDropDown] = useState(null);
    const handleItemClickDropdown = (event) => {
        if (showDropdown == 'responsive_nav') {
            setShowDropDown('disnone');
        } else {
            setShowDropDown('responsive_nav');
            event.stopPropagation();
        }
    };

    const useOutsideClick = (callback) => {
        const refdr = useRef();
        useEffect(() => {
            const handleItemClickDropdown = (event) => {
                if (refdr.current && !refdr.current.contains(event.target)) {
                    callback();
                }
            };
            document.addEventListener('click', handleItemClickDropdown);

            return () => {
                document.removeEventListener('click', handleItemClickDropdown);
            };
        }, [refdr]);

        return refdr;
    };
    const handleClickOutsideDropdown = () => {
        setShowDropDown('disnone');
    };
    const refdropdown = useOutsideClick(handleClickOutsideDropdown);
    return (
        <div className='section-header'>
            <HeaderTop />
            <Headerwapper showNavbar={handleItemClickDropdown} />
            <HeaderBottom
                navRef={refdropdown}
                showNavbar={showDropdown}
                handleItemClickDropdown={handleItemClickDropdown}
                scrollDirection={scrollDirection}
                headerCategory2={headerCategory2}
                headerCategory3={headerCategory3}
            />

        </div>
    );
}

export default Header1;