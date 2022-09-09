const isElementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight)
    )
}

const isOutOfView = (el) => {
    const elementTop = el.getBoundingClientRect().top
    return(
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    )
}
const handleAnimation = list => {
    list.forEach((el,i) => {
        if(isElementInView(el) && (i % 2 === 0)){
             setTimeout(()=>{
                el.classList.add('scroll-right')
            },250)
        } else if(isElementInView(el)) {
            setTimeout(()=>{
                el.classList.add('scroll-left')
            },250)
        }
        if(isOutOfView(el)){
            el.classList.remove('scroll-right') || el.classList.remove('scroll-left')
        }
    });
}

export {handleAnimation}