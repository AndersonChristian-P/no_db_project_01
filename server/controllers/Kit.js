let id = 1

let kit = [
  {
    id: id++,
    category: "Cameras",
    items: "D700, D4",
    preset: "job"
  },
  {
    id: id++,
    category: "Bags",
    items: "slimline",
    preset: "second"
  },
  {
    id: id++,
    category: "Grip",
    items: "2 avenger stands",
    preset: "assistant"
  },
  {
    id: id++,
    category: "Film Cameras",
    items: "P67",
    preset: "job"
  },
  {
    id: id++,
    category: "Film",
    items: "portra, tri-x, 400H",
    preset: "job"
  },
  {
    id: id++,
    category: "Reflectors",
    items: "scrim",
    preset: "assistant"
  },
  {
    id: id++,
    category: "Reflectors",
    items: "medium silver",
    preset: "second"
  }
]

module.exports = {
  request: (req, res) => {
    res.send(kit)
  },

  create: (req, res) => {
    let newItem = req.body
    newItem.id = id++
    newItem.preset = ""
    kit.push(newItem)
    res.send(kit)
  },
}