window.onload = () => {
    debugger
    //text transition
    var tags = document.querySelectorAll('#parallax1 div p');
    for (var i = 0; i < tags.length; i++) {
        tags[i].style.visibility = 'visible';
        tags[i].style.fontFamily = 'Tangerine';
    }
    //image shuffling
    var mainImage = '';
    var bckgrnd1 = '';
    var bckgrnd2 = '';
    var bckgrnd3 = '';
    var bckgrnd4 = '';

    function shuffling() {
        var num = Math.floor(Math.random() * 5) + 1;

        switch (num) {
            case 1:
                mainImage = 'css/shin/img1.jpg';
                bckgrnd1 = "url('css/shin/img2.jpg')";
                bckgrnd2 = 'css/shin/img3.jpg';
                bckgrnd3 = 'css/shin/img4.jpg';
                bckgrnd4 = 'css/shin/img5.jpg';
                break;
            case 2:
                mainImage = 'css/shin/img2.jpg';
                bckgrnd1 = 'css/shin/img3.jpg';
                bckgrnd2 = 'css/shin/img4.jpg';
                bckgrnd3 = 'css/shin/img5.jpg';
                bckgrnd4 = 'css/shin/img1.jpg';
                break;
            case 3:
                mainImage = 'css/shin/img3.jpg';
                bckgrnd1 = 'css/shin/img4.jpg';
                bckgrnd2 = 'css/shin/img5.jpg';
                bckgrnd3 = 'css/shin/img2.jpg';
                bckgrnd4 = 'css/shin/img1.jpg';
                break;
            case 4:
                mainImage = 'css/shin/img4.jpg';
                bckgrnd1 = 'css/shin/img5.jpg';
                bckgrnd2 = 'css/shin/img1.jpg';
                bckgrnd3 = 'css/shin/img2.jpg';
                bckgrnd4 = 'css/shin/img3.jpg';
                break;
            case 5:
                mainImage = 'css/shin/img5.jpg';
                bckgrnd1 = 'css/shin/img1.jpg';
                bckgrnd2 = 'css/shin/img2.jpg';
                bckgrnd3 = 'css/shin/img3.jpg';
                bckgrnd4 = 'css/shin/img4.jpg';
                break;
        }
    }
    // set 
    setInterval(() => {
        shuffling();
        document.querySelector('.bckgrnd-1-img').setAttribute('src', bckgrnd1);
        document.querySelector('.bckgrnd-2-img').setAttribute('src', bckgrnd2);
        document.querySelector('.bckgrnd-3-img').setAttribute('src', bckgrnd3);
        document.querySelector('.bckgrnd-4-img').setAttribute('src', bckgrnd4);
        document.querySelector('.big-frame').setAttribute('src', mainImage);

        document.querySelector('.top-bckgrnd-2').style.top = '102px';
        document.querySelector('.top-bckgrnd-2').style.left = '141px';
        document.querySelector('.top-bckgrnd-3').style.top = '151px';
        document.querySelector('.top-bckgrnd-3').style.left = '219px';
        document.querySelector('.top-bckgrnd-4').style.top = '210px';
        document.querySelector('.top-bckgrnd-4').style.left = '316px';

        // window size
        // var max400px = window.matchMedia('(max-width:500px)');
        // if (max400px.matches) {
        //     document.querySelector('.big-frame').style.width = '280px';
        //     document.querySelector('.big-frame').style.height = '170px';
        //     document.querySelector('.big-frame').style.marginTop = '1rem';
        //     document.querySelector('.big-frame').style.marginLeft = '1rem';
        //     document.querySelector('.big-frame').style.border = '1px solid black';
        // } else {
        document.querySelector('.big-frame').style.width = '495px';
        document.querySelector('.big-frame').style.height = '391px';
        document.querySelector('.big-frame').style.marginTop = '3rem';
        document.querySelector('.big-frame').style.marginLeft = '5rem';
        document.querySelector('.big-frame').style.border = '1px solid black';
        // }
    }, 2000);

    // reset
    setInterval(() => {
        document.querySelector('.top-bckgrnd-1').style.backgroundImage = 'none';
        document.querySelector('.big-frame').style.width = '0px';
        document.querySelector('.big-frame').style.height = '0px';
        document.querySelector('.big-frame').style.border = 'none';
        document.querySelector('.top-bckgrnd-2').style.top = '37px';
        document.querySelector('.top-bckgrnd-2').style.left = '95px';
        document.querySelector('.top-bckgrnd-3').style.top = '37px';
        document.querySelector('.top-bckgrnd-3').style.left = '95px';
        document.querySelector('.top-bckgrnd-4').style.top = '37px';
        document.querySelector('.top-bckgrnd-4').style.left = '95px';
    }, 3500);

    setInterval(() => {
        document.querySelector('.rectangle-div img').setAttribute('src', mainImage);
        document.querySelector('.rectangle-div').style.transform = 'rotateX(0deg)';
        document.querySelector('.rectangle-div img').style.borderRadius = '0%';
        document.querySelector('.rectangle-div').style.transition = 'transform 2s';
    }, 2000);
    setInterval(() => {
        document.querySelector('.rectangle-div').style.transform = 'rotateX(70deg)';
        document.querySelector('.rectangle-div img').style.borderRadius = '50%';
    }, 4000);

}