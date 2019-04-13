const express = require("express")

const KitCtrl = require("./controllers/Kit")

const app = express()
const port = 5361

app.use(express.json())

app.post("/api/kit", KitCtrl.create)
app.get("/api/kit", KitCtrl.request)

app.put("/api/kit/:id", KitCtrl.update)


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
