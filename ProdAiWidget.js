const styles = `
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
    }

    .chatContainerFull {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 3vh;
        right: 1.5vw;
        width: 30vw;
        height: min(40vw,85vh);
        transition: ease-in-out 0.1s;
        font-size: min(1.75vw,5vh);
    }

    .chatBubble {
        display: block;
        position: relative;
        width: 100%;
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
        align-items: center;
        width: 100%;
        height: 40%;
        font-size: 0.8em;
        font-weight: 700;
        box-sizing: border-box;
    }
    
    .waveEmoji {
        margin-left: 0.2em; /* Optional: adjust spacing between text and emoji */
        display: inline-block; /* Ensure emoji behaves as an inline element */
        transform: translateY(max(-2.5vh, -1.5vw)); /* Adjust vertical position if necessary */
        font-size: 1.5em;
    }

    .introductionParagraph {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.4em;
        width: 100%;
        height: 60%;
        margin: 0;
        font-weight: 300;
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
        padding: 3%;
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

    .prodAiLogo {
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
                            Ja sam Lena. AI prodajni asistnet. Mogu da odgovorim na sva Vaša pitanja vezana za naše proizvode!
                        </p>
                    </div>

                    <div class="arrowContainer" id="arrowContainer">
                        <img src="https://i.postimg.cc/0zfvyf8t/Arrow-Down.png" class="arrowDown">
                    </div>
                </div>

                <div class="messageArea" id="messageArea">

                    <div class="responseDiv">
                        Dobrodošli u Virtuelnu Prodavnicu!
                        Ja sam AI prodavac. Kako mogu da vam pomognem?
                    </div>

                    <div class="productDiv">

                        <div class="productImageContainer">
                            <img src="https://i.postimg.cc/62T0kHmD/Product-Placeholder.png" class="productImage">
                        </div>

                        <div class="productInfoDiv">
                            <h1 class="productPrice">6.499 RSD</h1>
                            <h2 class="productName">TUF Gaming H1</h2>
                        </div>

                        <button class="purchaseButton" onclick="addToCart(event)">
                            <img src="https://i.postimg.cc/jwG0F3Xj/Shopping-Cart.png" class="shoppingCartImage">
                            <img src="https://i.postimg.cc/KK82kMjm/Confirmed-Check.png" class="confirmImage">
                        </button>

                    </div>


                </div>

                <div class="inputDiv">
                    <div class="horizontalLine"></div>
                    <textarea type="text" class="inputArea" placeholder="Upišite poruku..." id="userInput"></textarea>
                    <div class="manufacturer">
                        <div class="providedBy">Omogućeno sa</div>
                        <img src="https://i.postimg.cc/8FXVhzfM/Prod-Ai-Logo.png" class="prodAiLogo">
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

arrow.addEventListener("click", (e) => {
    hideChat();
})

function showChat() {
    chatContainer.className = "chatContainerFull";
    chatBubble.style.display = "none";
    chat.style.display = "flex";
}

function hideChat() {
    chat.style.display = "none";
    chatContainer.className = "chatContainerBubble";
    chatBubble.style.display = "block";
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


        const reply = await fetch('/message', options);
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
        const reply = await fetch('/message', options);
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
    responseDiv.innerHTML = res.text;
    scrollToBottom();
    waiting = false;
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


function addToCart(event){
    const source = event.currentTarget;
    const cart = source.querySelector('.shoppingCartImage');
    const check = source.querySelector('.confirmImage');

    cart.style.display = 'none';
    check.style.display = 'block';
    addProduct('https://gigatron.rs/side-by-side-frizideri/samsung-rf48a401em9eo-side-by-side-frizider-585241');
}



async function addProduct(url){
    const product = document.createElement('div');

    const metadata = await extractMetadata(url);


    product.className = 'productDiv';

    if (metadata.priceAmount) {
        product.innerHTML = `<div class="productImageContainer"> <img src="${metadata.image}" class="productImage"> </div> <div class="productInfoDiv"> <h1 class="productPrice">${metadata.priceAmount} ${metadata.priceCurrency}</h1> <h2 class="productName">${metadata.title}</h2> </div> <button class="purchaseButton" onclick="addToCart(event)"> <img src="resources/ShoppingCart.png" class="shoppingCartImage"> <img src="resources/ConfirmedCheck.png" class="confirmImage"> </button>`
    } else {
        product.innerHTML = `<div class="productImageContainer"> <img src="${metadata.image}" class="productImage"> </div> <div class="productInfoDiv"> <h1 class="productPrice">${metadata.title}</h1> <h2 class="productName">${metadata.description}</h2> </div> <button class="purchaseButton" onclick="addToCart(event)"> <img src="resources/ShoppingCart.png" class="shoppingCartImage"> <img src="resources/ConfirmedCheck.png" class="confirmImage"> </button>`
    }

    chatArea.appendChild(product);
    scrollToBottom()
}


async function extractMetadata(url) {
    try {
        // Fetch the page content
        const fetchUrl = `/metaData/${encodeURIComponent(url)}`;
        let response = await fetch(fetchUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }


        const text = (await response.json()).data;

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
                    metadata.image = tag.getAttribute('content');
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


