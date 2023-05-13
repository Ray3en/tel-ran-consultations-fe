class Auto{
    constructor(model,millage){
        this.model = model
        this.millage = millage
        this.speed = 0
    }

    start(speed){
        this.speed = speed
        console.log(`Машина едет со сокростью ${this.speed} км/ч`)
    }

    stop(){
        this.speed = 0
        console.log(`Машина остановилась`)
    }

}


class Car extends Auto{
    constructor(model,millage){
        super()
        this.model = model
        this.millage = millage
        this.lights = false
    }

    setLights(){
        this.lights = !this.lights
        console.log((this.lights) ? 'Свет включен' : 'Свет выключен')
    }

}

// let car1 = new Car('BMW', 500)

// car1.start(100)
// car1.stop()
// car1.setLights()
// car1.setLights()

let car2 = new Auto('Challenger', 10000)
car2.
console.log(car2)







// ----------------------------------
// let carTesla = new Auto('Tesla', 10000)
// let carMustang = new Auto('Mustang', 300)

// carTesla.start(100)

// console.log(carTesla)
// console.log(carMustang)