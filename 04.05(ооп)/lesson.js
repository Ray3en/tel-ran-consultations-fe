// let user1 = {
//     name: 'Alex',
//     age: 30,
//     sayHi(){
//         console.log(`Приветствует ${user1.name}`)
//     }
// }

// let user2 = {
//     name: 'Steven',
//     age: 40,
//     sayHi(){
//         console.log(`Приветствует ${user2.name}`)
//     }
// }


// user1.sayHi()
// user2.sayHi()


class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    sayHi(){
        console.log(`Приветствует ${this.name}`)
    }
    calculateBirthYear(){
        let year = new Date().getFullYear()
        console.log(`Год рождения ${this.name} - ${year - this.age}`)
    }
 }

function createUser(name, age){
    return {
        name,
        age,
        sayHi(){
            console.log(`Приветствует ${this.name}`)
        },
        calculateBirthYear(){
            let year = new Date().getFullYear()
            console.log(`Год рождения ${this.name} - ${year - this.age}`)
        }
    }
}
 
let user10 = createUser('John', 50)

let user1 = new User('Alex', 30)
let user2 = new User('Steven', 40)
let user3 = new User('Neena', 50)
let user4 = new User('Tigran', 70)


// user1.sayHi()
// user2.sayHi()

// user3.calculateBirthYear()

console.log(user2.name)


// -------------------------------------
// Компоненты

function Header(){
    return (
        <div>
            <div class='logo'></div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
        </div>
    )
}


function App(){
    return(
        <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}


function Content(){
    return (
        <div>
            <ContentCard url='test.com/img.png' title='iphone'/>
            <ContentCard url='test.com/img.png' title='noteboock'/>
            <ContentCard url='test.com/img.png' title='oil'/>
            <ContentCard url='test.com/img.png' title='стол'/>
            <ContentCard url='test.com/img.png' title='табуретка'/>
        </div>
    )
}

function ContentCard({title, url}){
    return (
        <div>
            <img src={url}/>
            <h1>{title}</h1>
            <p></p>
        </div>
    )
}