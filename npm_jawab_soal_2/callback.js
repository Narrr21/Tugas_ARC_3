function main(out) {
    console.log("Welcome")
    setTimeout(() => {
        out();
    }, 2000); // Delay 2 detik
};
function bye(){
    console.log("Thank you")
}

main (bye);