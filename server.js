const express = require('express')
const app = express()

app.use(express.static('public'))

app.listen(5000, ()=> {
    console.log("Server is active"
    )
})
const { Configuration, OpenAIApi} = require("openai")

const openai = new OpenAIApi(new Configuration({
    apiKey: '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'
}))

app.post('/chat', async (req, res)=>{
    try {
        const resp = await openai.creatChatCompilation({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: req.body.question}
            ]
        })

        res.status(200).json({message: resp.data.choices[0].message.content})
    } catch(e) {
        res.status(400).json({message: e.message})
    }
})
