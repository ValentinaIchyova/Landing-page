
document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.menu').classList.toggle("animate");
})

const elements = document.querySelectorAll('.menu-text')
    for ( let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function() {
            document.querySelector('.menu').classList.toggle('animate');
            document.querySelector('.burger span').classList.toggle('active');
        })
    }
   


