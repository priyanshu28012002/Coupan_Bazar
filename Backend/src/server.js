import express  from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.get('jokes', (req, res) => {
    const jokes =
    [
        {
            id:1,
            contant:'Welcome 1'
        },
        {
            id:2,
            contant:'Welcome 2'
        },
        {
            id:3,
            contant:'Welcome 3'
        }




    ]
    res.send(jokes);
})


const port = 8081;

app.listen(port,(req, res) => {
    console.log("listening on port",port);
});