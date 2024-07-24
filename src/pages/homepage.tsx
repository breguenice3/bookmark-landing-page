import styled from "styled-components"
import Header from "../components/header/header"
import BookCarousel from "../components/books-carousel/book-carousel"

export default function Homepage() {
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
                        <GrayButton>Get it on Chrome</GrayButton>
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
                </div>
                <div>
                    <BookCarousel />
                </div>
            </SecondSection>
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
    width: 100vw;

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
        
`