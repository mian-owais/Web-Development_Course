import express from 'express';
const app = express();
const PORT =3000;


app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();
    console.log(day);

    let type = "a Weekday";
    let adv = "its time to work hard!";

    if (day === 0 || day ===6) {
        type = "The  Weekend";
        adv = "its time to have some fun!";
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });
});

app.listen(PORT,  () =>{
    console.log(`Server is Running on PORT number ${PORT}`);
});