

const generateUrl = (zone) => {
    return function(domen){
        console.log(`${domen}.${zone}`)
    }
}

const getCom = generateUrl('com')
const getNet = generateUrl('net')

getCom('mysite')
getCom('abc')
getCom('bbb')
getCom('vvv')
getNet('test')