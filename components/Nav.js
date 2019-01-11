import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { inherits } from 'util'

const NavDiv = styled.div`
    width: 100%;
    text-align: center;
    position: relative;
    background: ${props => props.theme.white};
    box-shadow: ${props => props.theme.bs};
    z-index: 100;
    @media (max-width: 768x) {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.5rem;
        height: auto !important;
    }
    @media (min-width: 769px) {
        height: 50px;
    }
`

const Logo = styled.p`
    position: absolute;
    font-size: 25px;
    left: 50%;
    height: auto;
    margin: 0 auto;
    transform: translate(-50%);
    a {
        text-decoration: none;
        color: ${props => props.theme.textMedium};
        line-height: 50px;
        padding-left: 10px;
        padding-right: 10px;
        text-align: center;
        font-family: alexana;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        position: relative;
    }
`

const NavBar = styled.div`
    position: absolute;
    top: 0;
    right: 5%;
    height: inherit;
    button {
        color: '#212121';
    }
    @media (max-width: 768px) {
        position: relative;
        right: 0;
    }
`

const NavBarInner = styled.div`
    position: relative;
    height: inherit;
`

export default class Navigation extends Component {
    render() {
        return (
            <NavDiv>
                <Logo>
                    <Link href="/">
                        <a>ARAVIND K R</a>
                    </Link>
                </Logo>
                <NavBar>
                    <NavBarInner>
                        <Button
                            style={{
                                fontSize: '14px',
                                fontWeight: '750',
                                marginTop: '8px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                textAlign: 'center',
                                fontFamily: 'gruppo',
                            }}
                        >
                            <a
                                href="#blog"
                                style={{
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Blog
                            </a>
                        </Button>
                        <Button
                            style={{
                                fontSize: '14px',
                                fontWeight: '750',
                                marginTop: '8px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                textAlign: 'center',
                                fontFamily: 'gruppo',
                            }}
                        >
                            <a
                                href="#projects"
                                style={{
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Projects
                            </a>
                        </Button>
                        <Button
                            style={{
                                fontSize: '14px',
                                fontWeight: '750',
                                marginTop: '8px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                textAlign: 'center',
                                fontFamily: 'gruppo',
                            }}
                        >
                            <a
                                href="#publication"
                                style={{
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Publication
                            </a>
                        </Button>
                        <Button
                            style={{
                                fontSize: '14px',
                                fontWeight: '750',
                                marginTop: '8px',
                                paddingLeft: '10px',
                                paddingRight: '10px',
                                textAlign: 'center',
                                fontFamily: 'gruppo',
                            }}
                        >
                            <a
                                href="#contact"
                                style={{
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Contact
                            </a>
                        </Button>
                    </NavBarInner>
                </NavBar>
            </NavDiv>
        )
    }
}
