import { useState } from "react"
import styled from "styled-components"

export default function Header() {

    const [disp, setDisp] = useState('none')

    return (
        <HeaderStyle>
            <div>
                <LogoBookmark />
            </div>

            <div>
                <ul>
                    <li><a href="#features">FEATURES</a></li>
                    <li><a href="#pricing">PRICING</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                    <button>LOGIN</button>
                </ul>
            </div>
            <HamburgerMenuDiv>
                <HamburgerMenu onClick={() => {
                    if (disp == 'none') {
                        setDisp('block')
                    }if(disp == 'block'){
                        setDisp('none')
                    }
                }}><img src="../../images/icon-hamburger.svg" alt="" /></HamburgerMenu>
            </HamburgerMenuDiv>

        </HeaderStyle>
    )
}

const HamburgerMenuDiv = styled.div`
    display: none;

    @media (max-width: 1024px) {
        display: flex;
    }
`

const HamburgerMenu = styled.button`
    border: none;
`

const LogoBookmark = styled.div`
    width: 300px;
    height: 30px;
    background-image: url('../../images/logo-bookmark.svg');
    background-repeat: no-repeat;
    `

const HeaderStyle = styled.header`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 60px 100px;
        position: relative;

        &   ul{
            display: flex;
            justify-content: space-evenly;
            width: 500px;
            list-style: none;
            font-weight: 300;
            color: hsl(229, 8%, 60%);
            font-size: 18px;
            align-items: center;
    
            & li{
                cursor: pointer;

                & a{
                    text-decoration: none;
                    color: hsl(229, 8%, 60%);
                }

                & a:hover{
                    color: hsl(0, 94%, 66%);
                }
            }

            & button{
                background-color: hsl(0, 94%, 66%);
                padding: 10px 20px;
                border-radius: 5px;
                color: white;
                border: 2px solid transparent;
            }

            & button:hover{
                background-color: white;
                color: hsl(0, 94%, 66%);
                cursor: pointer;
                border: 2px solid hsl(0, 94%, 66%);
            }
        }

        @media (max-width: 1024px) {
            width: 100vw;
            /* background-color: black; */
            display: flex;
            justify-content: space-evenly;
            height: 30px;
            padding: 40px 0px;

            & ul{
                display: none;
            }
        }
    `