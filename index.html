<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="server.js">
        <title>Personal HealthCare Chatbot AI</title>
        <style>
            .chat-area{
                width: 100%;
                height: 80vh;
                overflow: scroll;
                border: 1px solid gray;
                border-radius: 4px;
            }
            .input{
                width: 100%;
            }
            .submit-area{
                justify-content: center;
                display: flex;
                margin: 220px auto;
                width: 80%;
            }
            textarea{
                width: 100%;
            }
            .box{
                width: 96%;
                margin: 0 auto;
                padding: 10px 10px;
                background-color: #C4DBFE;
                margin: 10px auto;
            }
            .answer{
                background-color: aquamarine;
            }
            button{
                background-color: #004089;
                color: white;
                padding: 10px 10px;
                border-radius: 5px;
                border: none;
            }
        </style>
    </head>
    <body>
        <div class="chat-area"></div>
        <div class="submit-form">
            <div class="input">
                <textarea name="input" id="input" cols="30" rows="10"></textarea>
                <button class="btn">Submit</button>
            </div>
        </div>

        <script>
            const btn = document.querySelector('.btn')
            btn.addEventListener('click', getResponse)

            async function getResponse() {
                var inputText = document.getElementById('input').value
                const parentDiv = document.querySelector('.chat-area')

                if(input === '') {return}

                const question = document.createElement('div')
                question.innerHTML = inputText
                question.classList.add("box")
                parentDiv.appendChild(question)

                document.getElementById("input").value = ''

                let res = await fetch('http://localhost:5000/chat',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify({
                        question: inputText
                    })
                })

                const data = await res.json()

                if(data.message) {
                    const answer = document.creatElement('div')
                    answer.innerHTML = data.message
                    answer.classList.add("box", "answer")
                    parentDiv.appendChild(answer)
                }
            }
        </script>
    </body>
</html> 
