import styled from "styled-components"
import Header from "../components/header/header"
import BookCarousel from "../components/books-carousel/book-carousel"
import { useState } from "react"
import { getValue } from "@testing-library/user-event/dist/utils"
import Logo from "../components/logo-bookmark/logo"

export default function Homepage() {

    const [button1Style, setButtonStyle1] = useState("black")
    const [button2Style, setButtonStyle2] = useState("")
    const [button3Style, setButtonStyle3] = useState("")

    const [button1Line, setButtonLineStyle1] = useState("underline 4px hsl(0, 94%, 66%)")
    const [button2Line, setButtonLineStyle2] = useState("")
    const [button3Line, setButtonLineStyle3] = useState("")

    const [pageNumber, setPageNumber] = useState(0);

    const [arrowColor1, setArrowColor1] = useState("hsl(231, 69%, 60%)")
    const [arrowColor2, setArrowColor2] = useState("hsl(231, 69%, 60%)")
    const [arrowColor3, setArrowColor3] = useState("hsl(231, 69%, 60%)")
    const [arrowColor4, setArrowColor4] = useState("hsl(231, 69%, 60%)")

    const [textDisplay1, setTextDisplay1] = useState("none")
    const [textDisplay2, setTextDisplay2] = useState("none")
    const [textDisplay3, setTextDisplay3] = useState("none")
    const [textDisplay4, setTextDisplay4] = useState("none")

    const [textTransform1, setTextTransform1] = useState("none")
    const [textTransform2, setTextTransform2] = useState("none")
    const [textTransform3, setTextTransform3] = useState("none")
    const [textTransform4, setTextTransform4] = useState("none")

    function setButton(buttonNumber: number) {
        setButtonStyle1("")
        setButtonStyle2("")
        setButtonStyle3("")
        setButtonLineStyle1("")
        setButtonLineStyle2("")
        setButtonLineStyle3("")
        setPageNumber(0)
        if (buttonNumber == 1) {
            setButtonStyle1("black")
            setButtonLineStyle1("underline 4px hsl(0, 94%, 66%)")
            setPageNumber(0)
        } if (buttonNumber == 2) {
            setButtonStyle2("black")
            setButtonLineStyle2("underline 4px hsl(0, 94%, 66%)")
            setPageNumber(1)
        } if (buttonNumber == 3) {
            setButtonStyle3("black")
            setButtonLineStyle3("underline 4px hsl(0, 94%, 66%)")
            setPageNumber(2)
        }

    }

    const extensions = [
        {
            url: "../../images/logo-chrome.svg"
        },
        {
            url: "../../images/logo-firefox.svg"
        },
        {
            url: "../../images/logo-opera.svg"
        },
        {
            urlDot: "../../images/bg-dots.svg"
        }
    ]

    return (
        <div>

            <Header />

            <FirstSection>
                <FirstSectionTextContainer>
                    <h1>A Simple Bookmark Manager</h1>
                    <p>A clean and simple interface to organize your favourite websites. Open a new
                        browser tab and see your sites load instantly. Try it for free.
                    </p>
                    <ButtonContainer>
                        <BlueButton>Get it on Chrome</BlueButton>
                        <GrayButton>Get it on Firefox</GrayButton>
                    </ButtonContainer>
                </FirstSectionTextContainer>

                <FirstSectionImageBg>
                    <FirstSectionImage>
                    </FirstSectionImage>
                </FirstSectionImageBg>
            </FirstSection>
            <SecondSection id="features">
                <div>
                    <h2>Features</h2>
                    <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                    <ButtonsCarousel>
                        <hr />
                        <ButtonCarousel style={{ color: `${button1Style}`, textDecoration: `${button1Line}` }} onClick={() => { setButton(1) }}>Simple Bookmarking</ButtonCarousel>
                        <hr />
                        <ButtonCarousel style={{ color: `${button2Style}`, textDecoration: `${button2Line}` }} onClick={() => { setButton(2) }}>Speedy Searching</ButtonCarousel>
                        <hr />
                        <ButtonCarousel style={{ color: `${button3Style}`, textDecoration: `${button3Line}` }} onClick={() => { setButton(3) }}>Easy Sharing</ButtonCarousel>
                    </ButtonsCarousel>
                    <hr />
                </div>
                <div>
                    <BookCarousel page={pageNumber} />
                </div>
            </SecondSection>
            <ThirdSection id="pricing">
                <h2>Download the extension</h2>
                <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
                <CardExtensionContainer>
                    <CardExtension>
                        <div>
                            <img src={extensions[0].url} alt="" />
                        </div>
                        <div>
                            <h3>Add to Chrome</h3>
                            <p>Minimum version 62</p>
                        </div>
                        <div>
                            <img src={extensions[3].urlDot} alt="" />
                            <ExtensionButton>Add & Install Extension</ExtensionButton>
                        </div>
                    </CardExtension>

                    <CardExtension style={{ marginTop: "40px" }}>
                        <div>
                            <img src={extensions[1].url} alt="" />
                        </div>
                        <div>
                            <h3>Add to Firefox</h3>
                            <p>Minimum version 55</p>
                        </div>
                        <div>
                            <img src={extensions[3].urlDot} alt="" />
                            <ExtensionButton>Add & Install Extension</ExtensionButton>
                        </div>
                    </CardExtension>

                    <CardExtension style={{ marginTop: "80px" }}>
                        <div>
                            <img src={extensions[2].url} alt="" />
                        </div>
                        <div>
                            <h3>Add to Opera</h3>
                            <p>Minimum version 46</p>
                        </div>
                        <div>
                            <img src={extensions[3].urlDot} alt="" />
                            <ExtensionButton>Add & Install Extension</ExtensionButton>
                        </div>
                    </CardExtension>
                </CardExtensionContainer>
            </ThirdSection>
            <FourthSection>
                <FourthSectionText>
                    <h2>Frequently Asked Questions</h2>
                    <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
                </FourthSectionText>
                <div>
                    <ul>
                        <li>
                            <hr />
                            <p>
                                <ButtonText
                                    onClick={() => {
                                        if (textTransform1 == "none") {
                                            {
                                                setTextTransform1("rotate(180deg)")
                                                setArrowColor1("hsl(0, 94%, 66%)")
                                                setTextDisplay1("block")
                                            }
                                        } if (textTransform1 == "rotate(180deg)") {
                                            setTextTransform1("none")
                                            setArrowColor1("hsl(231, 69%, 60%)")
                                            setTextDisplay1("none")
                                        }
                                    }}
                                >What is Bookmark?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" style={{ transform: `${textTransform1}`, transitionDuration: "1s" }}><path fill="none" stroke={arrowColor1} stroke-width="3" d="M1 1l8 8 8-8" /></svg>
                                </ButtonText>
                            </p>
                            <p style={{ display: `${textDisplay1}` }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
                                justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                            </p>
                            <hr />
                        </li>

                        <li>
                            <p>
                                <ButtonText
                                    onClick={() => {
                                        if (textTransform2 == "none") {
                                            {
                                                setTextTransform2("rotate(180deg)")
                                                setArrowColor2("hsl(0, 94%, 66%)")
                                                setTextDisplay2("block")
                                            }
                                        } if (textTransform2 == "rotate(180deg)") {
                                            setTextTransform2("none")
                                            setArrowColor2("hsl(231, 69%, 60%)")
                                            setTextDisplay2("none")
                                        }
                                    }}
                                >How can I request a new browser?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" style={{ transform: `${textTransform2}` }}><path fill="none" stroke={arrowColor2} stroke-width="3" d="M1 1l8 8 8-8" /></svg>
                                </ButtonText>
                            </p>

                            <p style={{ display: `${textDisplay2}` }}>
                                Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
                                Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
                                ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
                                Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                            </p>
                            <hr />
                        </li>

                        <li>
                            <p>
                                <ButtonText
                                    onClick={() => {
                                        if (textTransform3 == "none") {
                                            {
                                                setTextTransform3("rotate(180deg)")
                                                setArrowColor3("hsl(0, 94%, 66%)")
                                                setTextDisplay3("block")
                                            }
                                        } if (textTransform3 == "rotate(180deg)") {
                                            setTextTransform3("none")
                                            setArrowColor3("hsl(231, 69%, 60%)")
                                            setTextDisplay3("none")
                                        }
                                    }}
                                >Is there a mobile app?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" style={{ transform: `${textTransform3}` }}><path fill="none" stroke={arrowColor3} stroke-width="3" d="M1 1l8 8 8-8" /></svg>
                                </ButtonText>
                            </p>
                            <p style={{ display: `${textDisplay3}` }}>
                                Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum
                                urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed
                                sollicitudin ex et ultricies bibendum.
                            </p>
                            <hr />
                        </li>

                        <li>
                            <p>
                                <ButtonText
                                    onClick={() => {
                                        if (textTransform4 == "none") {
                                            {
                                                setTextTransform4("rotate(180deg)")
                                                setArrowColor4("hsl(0, 94%, 66%)")
                                                setTextDisplay4("block")
                                            }
                                        } if (textTransform4 == "rotate(180deg)") {
                                            setTextTransform4("none")
                                            setArrowColor4("hsl(231, 69%, 60%)")
                                            setTextDisplay4("none")
                                        }
                                    }}
                                >What about other Chromium browsers?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" style={{ transform: `${textTransform4}` }}><path fill="none" stroke={arrowColor4} stroke-width="3" d="M1 1l8 8 8-8" /></svg>
                                </ButtonText>

                            </p>
                            <p style={{
                                display:
                                    `${textDisplay4}`
                            }}>
                                Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam
                                vitae neque eget nisl gravida pellentesque non ut velit.
                            </p>
                            <hr />

                            <div>
                                <BlueSmallButton>More Info</BlueSmallButton>
                            </div>
                        </li>
                    </ul>
                </div>
            </FourthSection>
            <LastSection id="contact">
                <p>
                    35,000+ ALREADY JOINED
                </p>
                <h3>
                    Stay up-to-date with what we're doing
                </h3>
                <div>
                    <EmailInput type="email" name="" id="" placeholder="Enter your email address" />
                    <RedButton>Contact Us</RedButton>
                </div>
            </LastSection>
            <Footer>
                <div>
                    <Logo />

                    <div>
                        <ul>
                            <li><a href="#features">FEATURES</a></li>
                            <li><a href="#pricing">PRICING</a></li>
                            <li><a href="">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
                <IconDIv>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><Apath fill="#FFF" fill-rule="evenodd" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20"><Apath fill="#FFF" fill-rule="evenodd" d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z" /></svg>
                </IconDIv>
            </Footer>
        </div>
    )
}


const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    width: auto;
    height: auto;

    @media (max-width: 1024px){
        gap: 10px;
    }
`

const BlueButton = styled.button`
    width: 150px;
    padding: 10px 20px;
    border: 2px solid transparent;
    cursor: pointer;
    background-color: hsl(231, 69%, 60%);
    color: white;
    border-radius: 5px;
    font-weight: 400;
    &:hover{
        border: 2px solid hsl(231, 69%, 60%);
        background-color: transparent;
        color: hsl(231, 69%, 60%);
    }
`

const GrayButton = styled.button`
    width: 150px;
    padding: 10px 20px;
    border: 2px solid transparent;
    cursor: pointer;
    background-color: transparent;
    color: black;
    border-radius: 5px;
    box-shadow: 0px 0px 6px black;
    font-weight: 400;
    &:hover{
        border: 2px solid black;
        background-color: transparent;
        color: #000000c8;
        box-shadow: none;
    }
`

const FirstSection = styled.section`
    display: flex;
    justify-content: space-between;
    padding-top: 200px;
    width: 100%;

    & h1{
        font-size: 50px;
    }

    & p{
        color: hsl(229, 8%, 60%);
    }
    @media (max-width: 1024px){
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        padding-top: 100px;
    }
`

const FirstSectionImage = styled.div`
    background-image: url("../../images/illustration-hero.svg");
    background-size: contain;
    background-repeat: no-repeat;

    width: 650px;
    height: 500px;

    position: absolute;
    right: 100px;
    top: 220px;

    @media (max-width: 1024px){
        width: 350px;
        height: 250px;
        position: absolute;
        right: 0px;
}
`

const FirstSectionImageBg = styled.div`
        background-color: hsl(231, 69%, 60%);
        width: 550px;
        height: 400px;

        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;

        @media (max-width: 1024px){
            /* position: relative; */
            /* left: 60px; */
            width: 300px;
            height: 300px;
        }
`

const FirstSectionTextContainer = styled.div`
        padding-left: 300px;
        height: 400px;
        display: flex;
        flex-direction: column;
        gap: 30px;

        & h1{
            width: 500px;
        }

        & p{
            width: 450px;
        }

        @media (max-width: 1024px){
            padding-left: 0px;
            gap: 15px;
            height: 300px;

            & h1{
                width: 300px;
                text-align: center;
                font-size: 24px;
            }

            & p{
                width: 300px;
                text-align: center;
            }
        }
`

const SecondSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 150px;

    & hr{
        margin-top: 20px;
        margin-bottom: 40px;
        background-color: hsla(228.74999999999994, 7.8431372549019605%, 60%, 0.123);
        height: 2px;
        border: none;
    }

    & h2{
        font-size: 32px;
        padding-bottom: 20px;
    }

    & p{
        width: 320px;
        color: hsl(229, 8%, 60%);
        padding-bottom: 50px;
    }

    @media (max-width: 1024px){
        padding-top: 0px;
    }
`

const ButtonsCarousel = styled.div`
    display: flex;
    justify-content: space-between;

    & hr{
        display: none;
    }   

    @media (max-width: 1024px){
        display: flex;
        flex-direction: column;
        gap: 20px;

        & hr{
            display: block;
            margin-top: 0px;
            margin-bottom: 0px;
            background-color: hsla(228.74999999999994, 7.8431372549019605%, 60%, 0.123);
            height: 2px;
            border: none;
        }
    }
`

const ButtonCarousel = styled.button`
    background-color: transparent;
    border: none;
    text-underline-offset: 23px;
    cursor: pointer;
    color: hsl(229, 8%, 60%);
    font-size: 16px;
    font-weight: 500;

    &:hover{
        color: hsl(0, 94%, 66%);
    }
`

const ThirdSection = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 300px;
    margin-bottom: 300px;

    & p{
        width: 500px;
        color: hsl(229, 8%, 60%);
        text-align: center;
        padding-bottom: 20px;
    }

    & h2{
        padding-bottom: 20px;
    }

    @media (max-width: 1024px){
        margin-top: 150px;
        margin-bottom: 100px;
        text-align: center;
        width: 100vw;

        & p{
            width: 350px;
        }
    }
`

const ExtensionButton = styled.button`
    width: 200px;
    padding: 10px 20px;
    border: 2px solid transparent;
    cursor: pointer;
    background-color: hsl(231, 69%, 60%);
    color: white;
    border-radius: 5px;
    font-weight: 400;
    margin-top: 25px;
    margin-bottom: 25px;

    &:hover{
        border: 2px solid hsl(231, 69%, 60%);
        background-color: transparent;
        color: hsl(231, 69%, 60%);
    }
`

const CardExtension = styled.div`
    width: 300px;
    height: auto;
    text-align: center;
    box-shadow: 3px 3px 10px hsla(228.74999999999994, 7.8431372549019605%, 60%, 0.274);
    border-radius: 15px;
    padding-top: 50px;
    & p{
        width: auto;
        padding-bottom: 35px;
        padding-top: 10px;
    }

    & h3{
        padding-top: 20px;
    }
`

const CardExtensionContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: start;
    gap: 30px;
    padding-top: 30px;

    @media (max-width: 1024px){
        flex-direction: column;
        align-items: center;
    }
`

const FourthSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & ul{
        list-style: none;
    }

    & p{
        width: 530px;
        text-align: start;
        line-height: 30px;
        color: hsl(229, 8%, 60%);
        font-weight: 400;
        padding-bottom: 20px;
    }

    & hr{
        background-color: hsla(228.74999999999994, 7.8431372549019605%, 60%, 0.123);
        height: 2px;
        border: none;
    }

    & div{
        display: flex;
        justify-content: center;
        padding-top: 45px;
        padding-bottom: 30px;
    }

    @media (max-width: 1024px){
        width: 100vw;

        & p{
            width: 320px;
        }
    }
`

const ButtonText = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 500px;
    font-weight: 500;
    font-size: 16px;
    padding-top: 20px;
    text-align: start;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &:hover{
        color: hsl(0, 94%, 66%);
    }

    @media (max-width: 1024px){
        width: 320px;
        font-size: 14px;
    }
`

const FourthSectionText = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    text-align: center;

    & h2{
        padding-bottom: 15px;
    }

    & p{
        text-align: center;
        width: 450px;
    }

    @media (max-width: 1024px){
        width: 100vw;

        & p{
            width: 100vw;
            padding: 0px 25px;
        }
    }
`

const BlueSmallButton = styled.button`
        background-color: hsl(231, 69%, 60%);
        padding: 10px 20px;
        border-radius: 5px;
        color: white;
        border: 2px solid transparent;
        cursor: pointer;

        &:hover{
            border: 2px solid hsl(231, 69%, 60%);
            background-color: transparent;
            color: hsl(231, 69%, 60%);
        }
`

const LastSection = styled.section`
    background-color: hsl(231, 69%, 60%);
    width: 100%;
    height: 300px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    & p{
        letter-spacing: 5px;
        font-weight: 400;
        font-size: 12px;
    }

    & h3{
        font-size: 30px;
        width: 400px;
        text-align: center;
        font-weight: 400;
    }
    & input{
        margin: 20px;
    }
`

const RedButton = styled.button`
    background-color: hsl(0, 94%, 66%);
    width: 125px;
    padding: 10px 20px;
    border: 2px solid transparent;
    cursor: pointer;
    color: white;
    border-radius: 5px;
    font-weight: 400;
    margin-top: 25px;
    margin-bottom: 25px;
    &:hover{
        background-color:  white;
        color: hsl(0, 94%, 66%);
        border: 2px solid hsl(0, 94%, 66%);
    }
`

const EmailInput = styled.input`
    padding: 10px 5px;
    width: 250px;
    border: 2px solid transparent;
    border-radius: 5px;
    outline: none;
`

const Footer = styled.footer`
    width: 100%;
    display: flex;
    background-color: hsl(229, 31%, 21%);
    justify-content: space-between;
    padding: 20px 50px;

    & div{
        display: flex;
    }

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
    }

`

const IconDIv = styled.div`
    width: 500px;
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
`

const Apath = styled.path`
    cursor: pointer;
    &:hover{
        fill: hsl(0, 94%, 66%);
    }
`