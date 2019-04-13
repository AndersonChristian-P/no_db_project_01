const express = require("express")

const KitCtrl = require("./controllers/Kit")

const app = express()
const port = 5361

app.use(express.json())

app.get("/api/kit", KitCtrl.request)
app.post("/api/kit", KitCtrl.create)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
