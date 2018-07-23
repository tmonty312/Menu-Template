let pies = [
    {
        id: 1,
        name: 'Coconut Cream',
        price: '$'+4
    },
    {
        id: 2,
        name: 'Chocolate',
        price: '$'+4
    },
    {
        id: 3,
        name: 'Banana Cream',
        price: '$'+4
    },
    {
        id: 4,
        name: 'White Chocolate Raspberry',
        price: '$'+4
    },
    {
        id: 5,
        name: 'PenutButter Chocolate',
        price: '$'+4
    }
]

let id = 6


module.exports = {
    getPies: (req, res) =>{
        res.status(200).send(pies)
    },
    addPies: (req,res) =>{
        const { name, price } = req.body

        const pie = {
            id,
            name,
            price: '$'+price 
        }
        pies.push(pie)
        id++
        res.status(200).send(pies)
    },
    updatePies: (req,res) =>{
        let {id} = req.params
        let {name, price}= req.body
        let index = pies.findIndex(s => s.id === +id)
        if(index !== -1) {
            pies[index].name = name
            pies[index].price=price
        }
        res.status(200).send(pies)
    },
    deletePies: (req,res) =>{
        const {id}= req.params
        let index= pies.findIndex(s => s.id === +id)

        if(index!== -1){
            pies.splice(index,1)
        }
        res.status(200).send(pies)
    }
}
