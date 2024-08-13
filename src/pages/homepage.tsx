import styled from "styled-components"
import Header from "../components/header/header"
import BookCarousel from "../components/books-carousel/book-carousel"
import { useState } from "react"

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
                        <ButtonCarousel style={{ color: `${button1Style}`, textDecoration: `${button1Line}` }} onClick={() => { setButton(1) }}>Simple Bookmarking</ButtonCarousel>
                        <ButtonCarousel style={{ color: `${button2Style}`, textDecoration: `${button2Line}` }} onClick={() => { setButton(2) }}>Speedy Searching</ButtonCarousel>
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
                                </ButtonText>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" style={{ transform: `${textTransform1}`, transitionDuration: "1s" }}><path fill="none" stroke={arrowColor1} stroke-width="3" d="M1 1l8 8 8-8" /></svg>
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
                                </ButtonText>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" style={{ transform: `${textTransform2}` }}><path fill="none" stroke={arrowColor2} stroke-width="3" d="M1 1l8 8 8-8" /></svg>
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
                                </ButtonText>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" style={{ transform: `${textTransform3}` }}><path fill="none" stroke={arrowColor3} stroke-width="3" d="M1 1l8 8 8-8" /></svg>
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
                                </ButtonText>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" style={{ transform: `${textTransform4}` }}><path fill="none" stroke={arrowColor4} stroke-width="3" d="M1 1l8 8 8-8" /></svg>
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
        </div>
    )
}


const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    width: auto;
    height: auto;
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
`

const FirstSectionImageBg = styled.div`
        background-color: hsl(231, 69%, 60%);
        width: 550px;
        height: 400px;

        border-top-left-radius: 50%;
        border-bottom-left-radius: 50%;
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
        width: 500px;
        color: hsl(229, 8%, 60%);
        padding-bottom: 50px;
    }
`

const ButtonsCarousel = styled.div`
    display: flex;
    justify-content: space-between;
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

    &:hover{
        color: hsl(0, 94%, 66%);
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