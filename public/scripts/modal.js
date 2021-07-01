export default function Modal(){

    // const modalwrapper 
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open(){
        //atribuir a classe active para o modal
        document.querySelector('.modal-wrapper').classList.add("active")
    }
    function close(){
        //funcionalidade de remover a classe active da modal
        document.querySelector('.modal-wrapper').classList.remove("active")
    }

    return{
        open,
        close
    }
}