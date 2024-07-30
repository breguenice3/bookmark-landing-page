import styled from "styled-components";

interface Props {
    page: number;
}

export default function BookCarousel(page: Props) {

    const features = [
        {
            name: "Bookmark in one click",
            description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
            url: "../../images/illustration-features-tab-1.svg"
        },
        {
            name: "Intelligent search",
            description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
            url: "../../images/illustration-features-tab-2.svg"
        },
        {
            name: "Share your bookmarks",
            description: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
            url: "../../images/illustration-features-tab-3.svg"
        }
    ]


    return (
        <CarouselContainer>
            <img src={features[page.page].url} alt="" />
            <div>
                <h1>{features[page.page].name}</h1>
                <p>{features[page.page].description}</p>
                <button>More Info</button>
            </div>
        </CarouselContainer>
    )
}

const CarouselContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 50px;
    text-align: start;

    & img{
        width: 500px;
        height: 380px;
    }

    & h1{
        padding-bottom: 20px;
    }

    & button{
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
    }
`