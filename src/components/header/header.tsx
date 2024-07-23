import styled from "styled-components"

export default function Header() {
    return (
        <HeaderStyle>
            <LogoBookmark />

            <div>
                <ul>
                    <li>FEATURES</li>
                    <li>PRICING</li>
                    <li>CONTACT</li>
                    <button>LOGIN</button>
                </ul>
            </div>
        </HeaderStyle>
    )
}

const LogoBookmark = styled.div`
    width: 300px;
    height: 30px;
    background-image: url('../../images/logo-bookmark.svg');
    background-repeat: no-repeat;
    `
const HeaderStyle = styled.header`
        width: 100vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 60px 100px;

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
            }

            & li:hover{
                color: hsl(0, 94%, 66%);
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
    `