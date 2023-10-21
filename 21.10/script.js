//3. Напишите функцию getPhotoByNickName(username), которая в качестве аргумента принимает
// никнейм пользователя (/users) и выводит все его фотографии (/photos). В качестве ответа выведите в консоль массив со всеми фотографиями указанного пользователя.

async function getPhotoByNickName(username) {
    const urlUsers = "https://jsonplaceholder.typicode.com/users";
    const urlAlbums = "https://jsonplaceholder.typicode.com/albums";
    const urlPhotos = "https://jsonplaceholder.typicode.com/photos";
    
    let userData = await fetch(urlUsers).then(res => res.json())
    let userId = userData.find(elem => elem.username === username).id

    let albumData = await fetch(urlAlbums).then(res => res.json())
    let albumUserId = albumData.filter(elem => elem.userId === userId).map(elem => elem.id)

    let photosData = await fetch(urlPhotos).then(res => res.json())
    let result = photosData.filter(elem => albumUserId.includes(elem.albumId))
    console.log(result)

}

