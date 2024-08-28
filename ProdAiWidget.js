const styles = `

    img {
        max-width: 100%;
    }

    .chatContainerBubble {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 3vh;
        right: 1vw;
        width: 12.5vw;
        height: 12.5vw;
        transition: ease-in-out 0.35s;
        z-index: 10000000;
    }

    .chatContainerFull {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 3vh;
        right: 1.5vw;
        width: 30vw;
        height: min(60vw,95vh);
        transition: ease-in-out 0.1s;
        z-index: 10000000;
        font-size: min(1.75vw,5vh);
        overflow-x: hidden;
        z-index: 10000000;
    }

    .chatBubble {
        display: block;
        position: relative;
        width: 100%;
        z-index: 10000000;
        height: 30%;
    }

    .circleGradient {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 77.5%;
    }

    .blackCircle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 45%;
    }

    .lenaCircle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 42.5%;
        cursor: pointer;
    }

    .chatWrapper {
        display: none;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
        

    .chatBackgroundGradient {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }

    .chat {
        position: relative;
        height: 86.5%;
        width: 80%;
        display: flex;
        flex-direction: column;
        background: linear-gradient(360deg, #272727 83.5%, #8D8D8D 100%);
        border-radius: 2vw;
    }

    .botInfo {
        height: 17.5%;
        width: 100%;
        flex-direction: row;
        display: flex;
        align-items: center;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        border-bottom: 1px solid white;
    }

    .lenaImageDiv {
        position: relative;
        height: 100%;
        width: 30%;
    }

    .lenaChatImage {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        max-height: 100%;
        max-width: 100%;
        padding-top: 2%;
        padding-left: 2%;
        box-sizing: border-box;
        margin-right: 2%;
    }

    .onlineStatus {
        position: absolute;
        width: 1vw;
        height: 1vw;
        border-radius: 50%;
        background-color: #27C001;
        left: 22%;
        bottom: 0;
        transform: translate(-50%, 30%);
        z-index: 2
    }

    .botHeaderContainer {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 50%;
        color: white;
        font-family: "Roboto", sans-serif;
    }

    .headerGreeting {
        display: flex;
        justify-content: left;
        align-items: flex-end;
        flex-direction: row;
        width: 100%;
        height: 40%;
        font-size: 0.8em;
        font-weight: 700;
        box-sizing: border-box;
        background: transparent;
    }
    
    .waveEmoji {
        font-size: 1.5em;
        text-shadow: none;
        background: transparent;
        border: none;
    }

    #messageArea p {
        all: revert;
    }

    .productDiv * {
        color: white;
    }


    .prodAiLogoWidget {
        all: revert;
        padding: 2px;
    }

    .introductionParagraph {
        color: white;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        font-size: 0.45em;
        width: 100%;
        height: 60%;
        margin: 0;
        font-weight: 360;
        text-align: justify;
    }

    .arrowContainer {
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .arrowDown {
        max-width: 25%;
    }

    .messageArea {
        display: flex;
        flex-direction: column;
        color: white;
        font-family: "Roboto", sans-serif;
        font-size: 0.55em;
        overflow-y: scroll;
        scroll-behavior: smooth;
        scrollbar-width: none;
        margin-bottom: 7vw;
        padding-top: 2%;
        min-height: calc(82.5% - 7vw);
        box-sizing: border-box;
        font-weight: 200;
        line-height: 1.5;
    }

    .messageDiv {
        max-width: 65%;
        text-align: left;
        padding: 2.5%;
        box-sizing: border-box;
        background-color: #494949;
        border-radius: 1vw;
        margin-top: 5%;
        margin-right: 4%;
        margin-left: auto;
        margin-bottom: 2%;
        white-space: pre-line;
    }

    .responseDiv {
        max-width: 65%;
        text-align: left;
        padding-left: 3%;
        padding-right: 3%;
        padding-top: 1%;
        padding-bottom: 1%;
        box-sizing: border-box;
        margin-top: 5%;
        margin-left: 4%;
        margin-right: auto;
        margin-bottom: 2%;

        position: relative;
        background: linear-gradient(103.24deg, #CE6FE9 0.65%, #017DFB 50%, #F5E10B 99.35%);
        border: 0;
        border-radius: 1vw;
        z-index: 1;
    }

    .responseDiv::before {
        content: '';
        display: block;
        height: calc(100% - 4px);
        width: calc(100% - 4px);
        background: #272727;
        position: absolute;
        top: 2px;
        left: 2px;
        border-radius: 1vw;
        z-index: -1;
    }

    .productDiv {
        width: 65%;
        text-align: left;
        padding-top: 1.5%;
        padding-bottom: 1.5%;
        padding-right: 3%;
        padding-left: 3%;
        box-sizing: border-box;
        margin-left: 4%;
        margin-right: auto;
        margin-bottom: 2%;
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        background-color: #333333;
        border-radius: 1vw;
    }

    .productImageContainer {
        width: 30%;
        height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .productImage {
        max-height: 100%;
        max-width: 100%;
        display: block;
        margin: auto;
        border-radius: 1vw;
    }

    .productInfoDiv {
        width: 45%;
        padding-left: 2.5%;
        padding-right: 2.5%;
        box-sizing: border-box;
    }

    .productPrice {
        width: 100%;
        height: 40%;
        font-size: 1.1em;
        font-weight: 700;
    }

    .productName {
        width: 100%;
        max-height: 60%;
        margin: 0;
        font-size: 0.75em;
        font-weight: 400;
    }

    .purchaseButton {
        width: 25%;
        height: 3vw;
        background-color: #545454;
        border-radius: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        cursor: pointer;
    }

    .shoppingCartImage {
        display: block;
        width: 60%;
    }

    .confirmImage {
        display: none;
        width: 50%;
    }

    .inputDiv {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 7vw;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .horizontalLine {
        width: 82.5%;
        height: 1px;
        background-color: white;
        margin: 0;
    }

    .inputArea {
        font-size: 0.60em;
        color: white;
        width: 82.5%;
        height: 60%;
        resize: none;
        outline: none;
        background-color: transparent;
        padding-top: 4%;
        box-sizing: border-box;
        border: none;
        scrollbar-width: none;

        ::placeholder {
            color: #C1C1C1;
        }
    }

    .manufacturer {
        display: flex;
        flex-direction: row;
        justify-content: right;
        align-items: flex-end;
        width: 100%;
        height: calc(40% - 1px);
        box-sizing: border-box;
        padding-bottom: 2.75%;
    }

    .providedBy {
        font-size: 0.35em;
        color: #C1C1C1;
        font-weight: 400;
        font-family: "Roboto", sans-serif;
        margin: 0;
        padding-right: 1.5%;
    }

    .prodAiLogoWidget {
        width: 15%;
        padding-right: 15%;

    }

    .sendButton {
        position: absolute;
        width: 3.5vw;
        height: 3.5vw;
        margin: 0;
        padding: 0;
        right: 0;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        transform: translate(25%,-10%);
        background: linear-gradient(126.82deg, #CE6EE9 14.65%, #007CFB 50.42%, #FFE500 86.19%);
        border-width: 0;
    }

    .sendImg {
        width: 60%;
        transform: translateX(-5%);
    }

    @media (max-width: 760px) {

        .responseDiv::before {
            height: calc(100% - 2px);
            width: calc(100% - 2px);
            top: 1px;
            left: 1px;
        }
    }

    @media (max-width: 360px){
        .responseDiv::before {
            height: calc(100% - 1px);
            width: calc(100% - 1px);
        }
    }

    @media (orientation: portrait)  {
    
        
    
        .productImage {
            border-radius: 3vw;
        }
    
        .prodAiLogoWidget {
            width: 25%;
            padding-right: 10%;
        }
        
        .providedBy {
            font-size: 0.9em;
        }
        
        .responseDiv {
            border-radius: 3vw;
        }
    
        .responseDiv::before {
            height: calc(100% - 4px);
            width: calc(100% - 4px);
            top: 2px;
            left: 2px;
            border-radius: 3vw;
        }
        
        .chat {
            background: linear-gradient(360deg, #272727 87.5%, #8D8D8D 100%);
        }
        
        .botInfo {
            height: 12.5vh;
            width: 100%;
            flex-direction: row;
            display: flex;
            align-items: center;
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;
            border-bottom: 1px solid white;
        }
        
        .chatBackgroundGradient {
            display: none;
        }

        .purchaseButton {
            width: 25%;
            // height: 9vw;
            background-color: #545454;
            border-radius: 3vw;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            cursor: pointer;
        }
        
        

        .chat, .botHeaderContainer, .headerGreeting, .introductionParagraph, .messageArea, .inputArea {
            font-size: 0.94em; /* Adjust this value to increase text size */
        }
        
        .botInfo {
                font-size: 1.5em;
        }
        
        @media (max-height: 675px) {
            .chat, .botHeaderContainer, .headerGreeting, .introductionParagraph, .messageArea, .inputArea {
                font-size: 0.82em; /* Adjust this value to increase text size */
            }
            
            .botInfo {
                font-size: 1.2em;
            }
            
        }
        
        @media (max-width: 470px) {
            @media (max-height: 400px){ 
                .botInfo {
                    font-size: 1em;
                }
            }
        }

        .messageArea {
            display: flex;
            flex-direction: column;
            color: white;
            font-family: "Roboto", sans-serif;
            overflow-y: scroll;
            scroll-behavior: smooth;
            scrollbar-width: none;
            margin-bottom: 17.65vh;
            padding-top: 1.25vh;
            min-height: 70vh;
            box-sizing: border-box;
            font-weight: 200;
            line-height: 1.25;
            font-size: 1.1em;
        }
        

        .chatContainerFull {
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            width: 100vw; /* Adjust width for a near fullscreen effect */
            height: 100vh; /* Adjust height for a near fullscreen effect */
            bottom: 0;  /* Center vertically with space around */
            right: 0; /* Center horizontally with space around */
            left: 0; /* Center horizontally with space around */
            font-size: min(4vw, 5vh);
            border-radius: 0; /* Maintain rounded edges */
            transition: ease-in-out 0.1s;
            z-index: 10000000;
            overflow: hidden;
        }

        .chatWrapper {
            display: none;
            top: 0;
            position: relative;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            border-radius: 0;
            // overflow: hidden;
        }
        

        .onlineStatus {
            position: absolute;
            width: 2vw; /* Increase the size of the dot */
            height: 2vw; /* Make sure it's a circle */
            border-radius: 50%;
            background-color: #27C001;
            left: 35%; /* Adjust this value to position the dot correctly */
            bottom: 1%; /* Adjust this value to position the dot correctly */
            z-index: 2;
        }

        .chat {
            border-radius: 0vw; /* Match border radius with container */
            height: 100%; /* Added to ensure full height */
            width: 100%; /* Added to ensure full width */
        }

        .sendButton {
            position: absolute;
            width: 12.5vw; /* Increase the size of the button */
            height: 12.5vw; /* Maintain square aspect ratio */
            bottom: 9.5vh; /* Adjust this value to position it slightly above the bottom edge */
            right: 6.25vw; /* Adjust this value to position it slightly to the left of the right edge */
            margin: 0;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background: linear-gradient(126.82deg, #CE6EE9 14.65%, #007CFB 50.42%, #FFE500 86.19%);
            border-width: 0;
        }

        .sendImg {
            width: 70%; /* Adjust the size of the image inside the button */
            transform: translate(-7.5%, 7.5%);
        }

        .inputArea {
            height: 12vh;  /* Increase the height for better usability */
            font-size: max(16px, 0.9em);  /* Increase font size for better readability */
            padding: 8px;  /* Add padding to give more space inside the input box */
        }

        .inputDiv {
            height: 17.5vh;  /* Ensure the input div expands to fit content */
            padding-bottom: 2vh;
            box-sizing: border-box;
        }

        .chatContainerBubble {
            width: 25vw; /* Increase the width for mobile */
            height: 25vw; /* Increase the height for mobile */
            
            bottom: 5vh;
            right: 5vw;
        }

        .lenaCircle {
            width: 60%; /* Increase the size of the Lena circle */
        }

        .blackCircle {
            width: 65%; /* Adjust the black circle size */
        }

        .circleGradient {
            width: 100%; /* Ensure the gradient fits the new size */
        }

        .chatBubble {
            height: 100%; /* Ensure the bubble takes the full height of the container */
            z-index: 10000000;
        }
        
        .productDiv {
            border-radius: 3vw;
        }
        
        .messageDiv {
            border-radius: 3vw;
        }

    }

    @media (orientation: landscape) {
        @media (max-height: 500px) {
            
            .chatBackgroundGradient {
                display: none;
            }
            
            .chatContainerFull {
                width: 100%;
                height: 100%;
                bottom: 0;
                right: 0;
                font-size: 2em;
            }
            
            .chatWrapper {
                width: 100%;
                height: 100%;
            }
            
            .chat {
                width: 100%;
                height: 100%;
                border-radius: 0;
            }
            
            .onlineStatus {
                width: 1.5%;
                height: 1.5%;
                left: 39%;
                bottom: 0;
            }
            
            .responseDiv {
                margin-top: 2%;
            }
            
            .messageDiv {
                margin-top: 2%;
            }
            
            .productInfoDiv {
                font-size: 1.35em;
            }
            
            .purchaseButton {
                height: 10%;
            }
            
            .messageArea {
                margin-bottom: 22.5%;
                min-height: 60%;
                padding-top: 1.25%;
                box-sizing: border-box;
            }
            
            .botInfo {
                height: 17.5%;
            }
            
            .inputDiv {
                height: 22.5%;
            }
            
            .inputArea {
                padding-top: 1%;
            }
            
            .prodAiLogoWidget {
                width: 10%;
                padding-right: 7.5%;
            }
            
            .sendButton {
                width: 4.25dvw;
                height: 4.25dvw;
                right: 5dvw;
                bottom: 10.75dvh;
            }
            
            .waveEmoji {
                font-size: 1em;
            }
        }
    }

`;


const html = `

        <div class="chatBubble" id="chatBubble">
            <img src="https://i.postimg.cc/0NptLF4d/Circle-Linear-Gradient.png" class="circleGradient">
            <img src="https://i.postimg.cc/Y4DNz6C8/Black-Circle.png" class="blackCircle" id="blackCircle">
            <img src="https://i.postimg.cc/Jsq5GVwf/Lena-Circle.png" class="lenaCircle" id="lenaCircle">
        </div>

        <div class="chatWrapper" id="chatWrapper">

            <img src="https://i.postimg.cc/mZddfQmq/Chat-Gradient.png" class="chatBackgroundGradient">
            <div class="chat">
                <div class="botInfo">

                    <div class="lenaImageDiv">
                        <img src="https://i.postimg.cc/ZvpttP7x/LenaRectangle.png" class="lenaChatImage">
                        <div class="onlineStatus"></div>
                    </div>

                    <div class="botHeaderContainer">
                        <div class="headerGreeting">Dobar Dan! <div class="waveEmoji">&#128075;</div></div>
                        <p class="introductionParagraph">
                            Ja sam Lena. AI prodajni asistent. Mogu da odgovorim na sva Vaša pitanja vezana za naše proizvode!
                        </p>
                    </div>

                    <div class="arrowContainer" id="arrowContainer">
                        <img src="https://i.postimg.cc/0zfvyf8t/Arrow-Down.png" class="arrowDown">
                    </div>
                </div>

                <div class="messageArea" id="messageArea">

                    <div class="responseDiv">
                        <p>
                        Dobrodošli u Virtuelnu Prodavnicu!
                        Ja sam AI prodavac. Kako mogu da vam pomognem?
                        </p>
                    </div>

                    
                    


                </div>

                <div class="inputDiv">
                    <div class="horizontalLine"></div>
                    <textarea type="text" class="inputArea" placeholder="Upišite poruku..." id="userInput"></textarea>
                    <div class="manufacturer">
                        <div class="providedBy">Omogućeno sa</div>
                        <img src="https://i.postimg.cc/8FXVhzfM/Prod-Ai-Logo.png" class="prodAiLogoWidget">
                    </div>

                    <button class="sendButton" id="sendButton">
                        <img src="https://i.postimg.cc/N9yvbvRV/SendImg.png" class="sendImg">
                    </button>
                </div>
            </div>

        </div>

`;



// Widget component
class Widget {
    static render() {
        // Append the styles to the head
        const styleElement = document.createElement('style');
        styleElement.textContent = styles;
        document.head.appendChild(styleElement);

        // Create a container and append the HTML
        const chatContainer = document.createElement('div');
        chatContainer.id = 'chatContainer';
        chatContainer.className = 'chatContainerBubble';
        chatContainer.innerHTML = html;

        // Append the container to the body
        document.body.appendChild(chatContainer);
    }
}

// if ("virtualKeyboard" in navigator) {
//     navigator.virtualKeyboard.overlaysContent = true;
// }

Widget.render();



const chat = document.getElementById("chatWrapper");
const chatBubble = document.getElementById("chatBubble");
const chatCircle = document.getElementById("blackCircle");
const lenaCircle = document.getElementById("lenaCircle");
const arrow = document.getElementById("arrowContainer");
const chatContainer = document.getElementById("chatContainer");

chatCircle.addEventListener("click", (e) => {
    showChat();
})

lenaCircle.addEventListener("click", (e) => {
    showChat();
})

function removeEmptyElements(element) {
    // Get all child elements
    const children = element.querySelectorAll('*');
    
    children.forEach(child => {
        // Check if the element is empty or contains only whitespace
        if (!child.innerHTML.trim() && child.children.length === 0) {
            child.remove(); // Remove the empty element
        }
        else{
            removeEmptyElements(child)
        }
    });
}


lenaCircle.addEventListener("load", async (e) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const tid = urlParams.get('tid');
    if(tid){
        showChat()
        const data = {thread_id: tid};
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        userInput.value = '';
        const res = await fetch('https://europe-central2-dumbbeapp.cloudfunctions.net/bikini_prodai/getAllMessages', options);
        const content = (await res.json()).messages.reverse();
        const regexp = /"(https?:\/\/[^\s"]+)"/g;

        for (const msg of content) {
        //content.forEach(async msg => {
            if(msg.role == "user"){
                const messageDiv = document.createElement('div');

                messageDiv.className = "messageDiv";
                messageDiv.innerHTML = msg.content.replaceAll("<br>", "");

                chatArea.append(messageDiv);
            }
            else{
                const responseDiv = document.createElement('div');
    
                responseDiv.className = "responseDiv";
                
                
                responseDiv.innerHTML = msg.content.replaceAll("<br>", "").replace(regexp, '');
                waiting = false;
                removeEmptyElements(responseDiv)
                chatArea.append(responseDiv);

                const matches = msg.content.matchAll(regexp);
                for (const match of matches) {
                    console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
                    if(match[0].includes("/product/")) await addProduct(match[0].slice(1,-1)) //samo producti treba da se kovertuju u product box
                    scrollToBottom();
                }
            

            }
            scrollToBottom();
            
        }


        //Dodatna preporuka:
        const data1 = {tid: tid};
        const options1 = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data1)
        };
        const responseMoreDiv = document.createElement('div');
        responseMoreDiv.className = "responseDiv";
        
        chatArea.append(responseMoreDiv);
        scrollToBottom();
        startLoading(responseMoreDiv)
        const ress = await fetch('https://europe-central2-dumbbeapp.cloudfunctions.net/bikini_prodai/recommendMoreProducts', options1);
        const recmore = (await ress.json()).response;
        stopLoading(responseMoreDiv)
        responseMoreDiv.innerHTML = recmore.replace(regexp, '');
        removeEmptyElements(responseMoreDiv)

        const matches = recmore.matchAll(regexp);
        for (const match of matches) {
            console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
            if(match[0].includes("/product/")) await addProduct(match[0].slice(1,-1))
            scrollToBottom();
        }
        scrollToBottom();

    }

})

arrow.addEventListener("click", (e) => {
    hideChat();
})

function showChat() {
    chatContainer.className = "chatContainerFull";
    chatBubble.style.display = "none";
    chat.style.display = "flex";
    document.body.style.overflow = 'hidden';
}

function hideChat() {
    chat.style.display = "none";
    chatContainer.className = "chatContainerBubble";
    chatBubble.style.display = "block";
    document.body.style.overflow = 'auto';
}



const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

const loadingText = ['.','..','...'];
let loadingIndex = 1;
let loadingInterval;
let waiting = false;

let thread_id = null;
const chatArea = document.getElementById('messageArea');


function startLoading(loadingDiv) {
    loadingInterval = setInterval(() => {
        loadingDiv.textContent = loadingText[loadingIndex];
        loadingIndex = (loadingIndex + 1) % loadingText.length;
    }, 500);
}

function stopLoading() {
    clearInterval(loadingInterval);
    loadingIndex = 1;
}

async function sendPrompt() {
    const prompt = userInput.value;

    // First prompt
    if (thread_id === null) {
        const data = {message: prompt};
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        userInput.value = '';


        const reply = await fetch('https://europe-central2-dumbbeapp.cloudfunctions.net/bikini_prodai/startThread', options);
        const replyData = await reply.json();
        thread_id = replyData.tid
        return {tid: replyData.tid, text: replyData.response};
    }
    else{
        const data = {message: prompt, tid: thread_id};
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        userInput.value = '';
        const reply = await fetch('https://europe-central2-dumbbeapp.cloudfunctions.net/bikini_prodai/messageInThread', options);
        const replyData = await reply.json();
        return {text: replyData.response};
    }
}

function scrollToBottom() {
    chatArea.scrollTop = chatArea.scrollHeight;
}

async function sendMessageAndUpdateChat(){
    if (waiting)
        return;
    waiting = true;


    // Showing sent prompt
    const messageDiv = document.createElement('div');

    messageDiv.textContent = userInput.value;
    messageDiv.className = "messageDiv";


    chatArea.appendChild(messageDiv);


    const responseDiv = document.createElement('div');

    responseDiv.textContent = '.';
    responseDiv.className = "responseDiv";
    
    chatArea.appendChild(responseDiv);
    scrollToBottom();

    startLoading(responseDiv);

    const res = await sendPrompt();

    stopLoading();
    
    const regexp = /"(https?:\/\/[^\s"]+)"/g;;
    responseDiv.innerHTML = res.text.replace(regexp, '');
    removeEmptyElements(responseDiv)
    waiting = false;

    const matches = res.text.matchAll(regexp);
    for (const match of matches) {
        console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
        if(match[0].includes("/product/")) addProduct(match[0].slice(1,-1))
    }

    scrollToBottom();


}

sendButton.addEventListener('click',  (e) => {
    if (userInput.value !== ''){
        sendMessageAndUpdateChat();
    }
})

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (userInput.value !== ''){
            sendMessageAndUpdateChat();
        }
    }
})

async function addToCart(event) {
    event.preventDefault(); // Prevent default button action

    // Get the button that was clicked
    const button = event.currentTarget;
    // Get the product box containing this button
    const productBox = button.parentElement;

    // Get the product URL from the product box
    const productUrl = productBox.querySelector('.productImageContainer a').href;
    
    try {
        // Fetch the product page content
        const response = await fetch(productUrl);
        const text = await response.text();

        // Parse the HTML content to extract product data
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');

        const productId = productUrl.split("/").slice(-2,-1)[0];
        const productPrice = productBox.querySelector('.productPrice').textContent;
        const productName = productBox.querySelector('.productName').textContent;
        const quantity = 1; // Default to 1, adjust as needed


        const sizeVariant = "m"
        const colorVariant = "crna"
        const shapeVariant = "0"

        // Construct the request payload
        const payload = {
            id: productId,
            quantity: quantity,
            price: productPrice,
            name: productName,
            velicina: sizeVariant || 0,
            boja: colorVariant || 0,
            oblik: shapeVariant || 0,
            type: 'add'
        };

        // Send the add-to-cart request
        await fetch("https://bikini.co.rs/template/assets/ajax/card.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Requested-With": "XMLHttpRequest"
            },
            body: new URLSearchParams(payload).toString(),
            credentials: "include"
        });

        // Provide feedback to the user (optional)
        alert(`${productName} has been added to your cart.`);
    } catch (error) {
        console.error('Error adding product to cart:', error);
        alert('Failed to add product to cart.');
    }
}



async function addProduct(url){
    const product = document.createElement('div');

    const metadata = await extractMetadata(url);


    product.className = 'productDiv';

    if (metadata.priceAmount) {
        product.innerHTML = `<div class="productImageContainer"> <a href="${url}"> <img src="${metadata.image}" class="productImage"> </a></div> <div class="productInfoDiv"> <h1 class="productPrice">${metadata.priceAmount} ${metadata.priceCurrency}</h1> <h2 class="productName">${metadata.title}</h2> </div> <button class="purchaseButton" onclick="addToCart(event)"> <img src="https://i.postimg.cc/jwG0F3Xj/Shopping-Cart.png" class="shoppingCartImage"> <img src="https://i.postimg.cc/KK82kMjm/Confirmed-Check.png" class="confirmImage"> </button>`
    } else {
        product.innerHTML = `<div class="productImageContainer"> <a href="${url}"> <img src="${metadata.image}" class="productImage"> </a></div> <div class="productInfoDiv"> <h1 class="productPrice">${metadata.title}</h1> <h2 class="productName">${metadata.description}</h2> </div> <button class="purchaseButton" onclick="addToCart(event)"> <img src="https://i.postimg.cc/jwG0F3Xj/Shopping-Cart.png" class="shoppingCartImage"> <img src="https://i.postimg.cc/KK82kMjm/Confirmed-Check.png" class="confirmImage"> </button>`
    }

    chatArea.appendChild(product);
    scrollToBottom()
}

async function extractMetadata(url) {
    try {


        const data = {url: url};
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };


        const response = await fetch('https://europe-central2-dumbbeapp.cloudfunctions.net/bikini_prodai/fetch', options);


        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        //const text = await response.text();
        //let response = await fetch(fetchUrl);



        const text = (await response.text());

        // Parse the HTML
        const parser = new DOMParser();

        let doc = parser.parseFromString(text, 'text/html');

        // Extract metadata
        let metadata = {};
        const metaTags = doc.getElementsByTagName('meta');

        for (let tag of metaTags) {
            let name = tag.getAttribute('name') || tag.getAttribute('property');
            if (name) {
                if (name === 'og:title') {
                    metadata.title = tag.getAttribute('content');
                } else if (name === 'og:description') {
                    metadata.description = tag.getAttribute('content').split('.')[0];
                } else if (name === 'og:image') {

                    const lastSlashIndex = tag.getAttribute('content').lastIndexOf('/');
                    if (lastSlashIndex !== -1) {
                        metadata.image = tag.getAttribute('content').substring(0, lastSlashIndex+1);
                    }
                    else{
                        metadata.image = tag.getAttribute('content');
                    }
                } else if (name === 'product:price:amount'){
                    metadata.priceAmount = tag.getAttribute('content');
                } else if (name === 'product:price:currency') {
                    metadata.priceCurrency = tag.getAttribute('content');
                }
            }
        }

        console.log('Metadata:', metadata);


        return metadata;
    } catch (error) {
        console.error('Error fetching or parsing the page:', error);
    }
}

const inputDiv = document.querySelector('.inputDiv');
const chatWrapper = document.querySelector('.chatWrapper');

// window.addEventListener('resize', () => {
//     const messageArea = document.getElementById('chat');
//     const inputDiv = document.getElementById('inputDiv');
//     console.log("Resize");
//     if (window.innerHeight < screen.height) {
//         messageArea.style.paddingBottom = '40vh';
//         inputDiv.style.marginBottom = '40vh';
//     } else {
//         messageArea.style.paddingBottom = '0';
//         inputDiv.style.marginBottom = '0';
//     }
// });