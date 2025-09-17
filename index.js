let phones = [
                    { id: 1, name: 'iphone X', price: 300 },
                    { id: 2, name: 'iphone 11', price: 500 },
                    { id: 3, name: 'iphone 12 pro', price: 300 },
                    { id: 4, name: 'iphone 14 pro max', price: 300 },
]

function showPhones() {
                    console.clear()
                    console.table(phones, ["id", "name", "price"]);
}


function addNewPhone() {
                    let addNewPhone = prompt("Add new Phone you need to add");
                    let addPrice = +prompt("Add Price for new Phone");

                    phones.push({
                                        id: phones.length + 1,
                                        name: addNewPhone,
                                        price: addPrice

                    });
                    showPhones()
}

function Edit() {
                    let idToEdit = +prompt("Enter id you need to edit.");
                    let phoneEdit = prompt("Enter New Name for Phone.");
                    let priceEtit = +prompt("Enter new price.");

                    let phone = phones.find(p => p.id === idToEdit);

                    if (phone) {
                                        phone.name = phoneEdit;
                                        phone.price = priceEtit;
                    }
                    showPhones()
}


function deletePhone() {
                    let indexToDelete = +prompt("Enter id you need to delete.");

                    phones.splice(indexToDelete, 1);
                    showPhones()

}




