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
  create: (req, res) => {
    let newItem = req.body
    newItem.id = id++
    newItem.preset = ""
    kit.push(newItem)
    res.send(kit)
  },

  request: (req, res) => {
    let { items } = req.query
    if (items) {
      return res.send(kit.filter(val => {
        return val.items.toLowerCase().includes(items) ||
          val.items.toUpperCase().includes(items)
      })) // the query searches for keywords in each object's 'items' key
    }
    res.send(kit)
  },

  update: (req, res) => {
    let { id } = req.params
    let newItem = req.body
    newItem.id = id
    newItem.preset = ""
    let index = kit.findIndex(item => +item.id === +id)
    kit.splice(index, 1, newItem)
    res.send(kit)
  },

  delete: (req, res) => {
    let { id } = req.params
    let index = kit.findIndex(item => +item.id === +id)
    kit.splice(index, 1)
    res.send(kit)
  }
}