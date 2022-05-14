window.onload = function() {

    function onClick() {
        document.querySelector('.modalWrap').style.display ='block';
        document.querySelector('.blackBg').style.display ='block';
    }
    function offClick() {
        document.querySelector('.modalWrap').style.display ='none';
        document.querySelector('.blackBg').style.display ='none';
    }
    
    document.getElementById('modalBtn').addEventListener('click', onClick);
    document.querySelector('.modalClose').addEventListener('click', offClick);
};