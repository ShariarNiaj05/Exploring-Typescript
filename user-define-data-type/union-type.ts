let userId: string | number | boolean;

userId = 101
userId = "101"
userId = true

// console.log(userId);

function displayUserInfo(userId: string | number) {
    console.log(userId);
}

displayUserInfo(10)
displayUserInfo("5")