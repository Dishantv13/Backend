import express from "express";

const app = express();

app.get("/" ,(req, res ) => {
    res.send("server is ready")
});

// get alist of 5 jokes(

app.get('/api/jokes',(req,res) => {
    const jokes = [
        {
            id : 1,
            title : "a joke",
            content :"This Is A joke"

        },
        {
            id : 2,
            title : "2 joke",
            content :"This Is 2 joke"

        },
        {
            id : 3,
            title : "3 joke",
            content :"This Is 3 joke"

        },
        {
            id : 4,
            title : "4 joke",
            content :"This Is 4 joke"

        },
        {
            id : 5,
            title : "5th joke",
            content :"This Is 5 joke"

        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`serve at http:/localhost:${port}`);
})