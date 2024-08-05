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
            <SecondSection>
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
            <ThirdSection>
                <h2>Download the extension</h2>
                <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
                <div>
                    <CardExtension>
                        <h3>Add to Chrome</h3>
                        <ExtensionButton>Add & Install Extension</ExtensionButton>
                    </CardExtension>

                    <CardExtension>
                        <h3>Add to Firefox</h3>
                        <ExtensionButton>Add & Install Extension</ExtensionButton>
                    </CardExtension>

                    <CardExtension>
                        <h3>Add to Opera</h3>
                        <ExtensionButton>Add & Install Extension</ExtensionButton>
                    </CardExtension>
                </div>
            </ThirdSection>
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

    &:hover{
        border: 2px solid hsl(231, 69%, 60%);
        background-color: transparent;
        color: hsl(231, 69%, 60%);
    }
`

const CardExtension = styled.div`
    width: 300px;
    text-align: center;
`