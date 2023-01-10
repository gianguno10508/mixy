import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from "styled-components";
import HoverCate from './HoverCate';
const Wrapper = styled.div`
  border-width: 0;
  border-bottom-width: 1px;

  width: 100%;
  background: rgb(255, 255, 255);
  position: absolute;
  top: 100%;
  left: 0px;
  padding: 0px;
  min-width: 270px;
  box-shadow: rgb(0 0 0 / 7%) 0px 5px 13.5px 1.5px;
  margin-top: 5px;
  z-index: 10;

  transition: height 0.6s, opacity 0.6s;
  height: ${(p) => (p.height ? `${p.height}px` : "auto")};
  opacity: 1;

  ${(p) =>
        !p.visible &&
        css`
      height: 0;
      opacity: 0;
    `}
`;

function HeaderBottom({ scrollDirection, headerCategory, headerCategory2, headerCategory3, navRef, showNavbar, handleItemClickDropdown }) {
    const [height, setHeight] = useState(0);
    const [visible, setVisible] = useState(true);

    const assignHeight = (node) => {
        if (node && !height) {
            setHeight(node.clientHeight);
            setVisible(false);
        }
    };

    return (
        <div className={`header-bottom ${scrollDirection ? 'scroll-menu' : ''}`}>
            <div className='container'>
                <div ref={navRef} className={`header-bottom-wapper ${showNavbar}`}>
                    <div className='header-buttons-mobile'>
                        <div className='header-login'>
                            <a href='#'>
                                <i className="fa-regular fa-user"></i>
                            </a>
                        </div>
                        <div className='header-wish'>
                            <div className='number-wish'>
                                <span>0</span>
                            </div>
                            <a href='#'>
                                <i className="fa-regular fa-heart"></i>
                            </a>
                        </div>
                    </div>
                    <div className='all-category' >
                        <h3 className="title_vertical"
                            onClick={() => setVisible(!visible)}>
                            <i className="fa-solid fa-bars"></i>
                            All Cattegories
                            <i className="fa-solid fa-chevron-down"></i>
                        </h3>
                        <Wrapper className={visible ? 'show-cate' : ''} visible={visible} ref={assignHeight} height={height}>
                            <ul className='menu-content'>
                                <li className='menu-item bold'>
                                    <a href='#'>
                                        <span>Our special products</span>
                                    </a>
                                </li>
                                <li className='menu-item bold'>
                                    <a href='#'>
                                        <span>Our best sales</span>
                                    </a>
                                </li>
                                <li className='menu-item bold'>
                                    <a href='#'>
                                        <span>New Arrivals</span>
                                    </a>
                                </li>
                                <li className='menu-item'>
                                    <a href='#'>
                                        <i className="fa-solid fa-fish-fins"></i>
                                        <span>Fresh Food</span>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </a>
                                    <div className='pos-sub-menu'>
                                        <HoverCate data={headerCategory2} />
                                    </div>
                                </li>
                                <li className='menu-item'>
                                    <a href='#'>
                                        <i className="fa-solid fa-apple-whole"></i>
                                        <span>Fresh Vegetables</span>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </a>
                                    <div className='pos-sub-menu'>
                                        <HoverCate data={headerCategory2} />
                                    </div>
                                </li>
                                <li className='menu-item'>
                                    <a href='#'>
                                        <i className="fa-solid fa-snowflake"></i>
                                        <span>Fresh Salad & Dips</span>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </a>
                                    <div className='pos-sub-menu'>
                                        <HoverCate data={headerCategory3} />
                                    </div>
                                </li>
                                <li className='menu-item'>
                                    <a href='#'>
                                        <i className="fa-solid fa-egg"></i>
                                        <span>Milk, Butter & Eggs</span>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </a>
                                    <div className='pos-sub-menu'>
                                        <HoverCate data={headerCategory2} />
                                    </div>
                                </li>
                            </ul>
                        </Wrapper>

                    </div>
                    <ul className='nav-menu'>
                        <li className={` tille-header-mobile`}
                            onClick={(event) => handleItemClickDropdown(event)}>
                            <h5>Menu</h5><i className="fa-solid fa-arrow-left-long"></i>
                        </li>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Shop List
                            <span className='menu-subtitle'>
                                Hot
                            </span>
                        </a></li>
                        <li><Link to="/about-us">About us</Link></li>
                        <li><a href='#'>Contact us</a></li>
                    </ul>
                </div>
            </div>
            <button className='scroll-top'
                onClick={() => window.scrollTo(0, 0)}>
                <i className="fa-solid fa-chevron-up"></i>
            </button>
        </div>
    );
}

export default HeaderBottom;