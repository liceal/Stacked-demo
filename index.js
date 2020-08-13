var imgs = document.getElementsByTagName('img')
var containers = document.getElementsByClassName('container')

window.addEventListener('scroll', dynamic_bounding)

function dynamic_bounding(){
    for (let i = 0; i < imgs.length; i++) {
        let imgBounding = imgs[i].getBoundingClientRect()
        let containerBounding = containers[i].getBoundingClientRect()
        // 图片外容器可视距离一半加上图片的一半距离正好到图片的顶端，这个位置超过则固定，否则取消
        if (containerBounding.height + containerBounding.top - (imgBounding.height / 2) >= containerBounding.height / 2) {
            console.log('取消固定');
            imgs[i].style.position = ""
            imgs[i].style.top = ""
            imgs[i].style.left = ""
            // 取消固定图片
        } else {
            // 固定图片
            console.log('固定图片');
            imgs[i].style.position = 'fixed'
            imgs[i].style.top = '0px'
            imgs[i].style.left = (document.body.clientWidth - imgBounding.width) / 2 + 'px'
        }
    }
}
