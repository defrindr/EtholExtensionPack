var element = document.querySelector('.v-overlay.v-overlay--active.theme--dark');
if(element){
    element.parentElement.removeChild(element);
}
var element = document.querySelector('.v-dialog__content.v-dialog__content--active');
if(element){
    element.parentElement.removeChild(element);
}

console.log("Ethol Extension, maintain by Defri Indra M")