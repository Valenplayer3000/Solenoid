import { styled } from "solid-styled-components";

const MessageFallback = () => {
    const MessageFallbackContainer = styled("div")`
        width: 100%;
        height: 100%;
        background-color: ${props => props.theme["secondary-background"]};
    `

    return (
        <div class="w-full h-full">
            {/* TODO: Polish UI */}
            {/* TODO: Move Fallback to Separate Component */}
            <h1>This channel has no messages yet.</h1>
            <p>Be the first to talk here!</p>
        </div>
    );
};

export default MessageFallback;
