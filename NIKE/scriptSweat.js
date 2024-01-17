//Sweat Alert
document.getElementById('BRLINK').addEventListener('click', () => {  
        Swal.fire({
            title: "",
            text: "Do you want to open a new page?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#9b2b35",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                window.open("https://www.nike.com/t/pro-womens-tank-J0FvFn");
            }
        });
});


//Sweat Alert
document.getElementById('BRLINK2').addEventListener('click', () => {  
    Swal.fire({
        title: "",
        text: "Do you want to open a new page?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#33292c",
        cancelButtonColor: "#d53d29",
        confirmButtonText: "Yes"
    }).then((result) => {
        if (result.isConfirmed) {
            window.open("https://www.nike.com/t/womens-long-sleeve-training-top-qTx3TK");
        }
    });
});

document.getElementById('BRLINK3').addEventListener('click', () => {  
    Swal.fire({
        title: "",
        text: "Do you want to open a new page?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#9b2b35",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
    }).then((result) => {
        if (result.isConfirmed) {
            window.open("https://news.nike.com/news/nike-chinese-new-year-collection");
        }
    });
});


document.getElementById('BRLINK4').addEventListener('click', () => {  
    Swal.fire({
        title: "",
        text: "Do you want to open a new page?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#33292c",
        cancelButtonColor: "#d53d29",
        confirmButtonText: "Yes"
    }).then((result) => {
        if (result.isConfirmed) {
            window.open("https://www.nike.com/w/nike-react-2-collection-1xy6y");
        }
    });
});