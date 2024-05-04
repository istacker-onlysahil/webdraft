import React from 'react'

const MYButton = ({ ValueProp, LayoutProp, ColorProp, SizeProp, RoundedProp }) => {

    // ================== Dynamic Background Color =====================
    let ColorClass = '';
    switch (ColorProp) {
        case 'theme':
            ColorClass = 'btn-theme-color';
            break;
        case 'outline-dark':
            ColorClass = 'bg-transparent hover:bg-gray-800 hover:text-white border-2 border-gray-800';
            break;

        default:
            break;
    }

    
    // ================== Dynamic Layout =====================
    let layoutClass = '';
    switch (LayoutProp) {
        case 'Shining':
            layoutClass = 'btn-shine';
            break;
        case 'ZoomIn':
            layoutClass = 'hover:scale-125';
            break;
        case 'ZoomIn-Shining':
            layoutClass = 'hover:scale-95 btn-shine';
            break;
        case 'ZoomOut':
            layoutClass = 'hover:scale-110';
            break;
        case 'ZoomOut-Shining':
            layoutClass = 'hover:scale-110 btn-shine';
            break;

        default:
            break;
    }


    // ================== Dynamic Size =====================
    let SizeClass = '';
    switch (SizeProp) {
        case 'small':
            SizeClass = 'text-sm px-3 p-2';
            break;
        case 'small-rec':
            SizeClass = 'text-sm px-8 py-2';
            break;
        case 'medium':
            SizeClass = 'text-lg px-8 py-4';
            break;
        case 'medium-rec':
            SizeClass = 'text-lg px-14 py-4';
            break;
        case 'large':
            SizeClass = 'text-2xl px-10 py-5';
            break;
        case 'large-rec':
            SizeClass = 'text-2xl px-10 py-5';
            break;

        default:
            break;
    }


    // ================== Dynamic Button Roundness =====================
    let RoundedClass = '';
    switch (RoundedProp) {
        case 'none':
            RoundedClass = 'rounded-none';
            break;
        case 'small':
            RoundedClass = 'rounded-md';
            break;
        case 'medium':
            RoundedClass = 'rounded-xl';
            break;
        case 'full':
            RoundedClass = 'rounded-full';
            break;

        default:
            break;
    }

    return (<>
            <button className={`${ColorClass} ${layoutClass} ${SizeClass} ${RoundedClass} transition-all duration-300 overflow-hidden relative font-semibold outline-none`}>{ValueProp}</button>
    </>)
}

export default MYButton

// =============== How to use ======================
{/* <MYButton 
ValueProp={"Get Connected"} 
LayoutProp={"ZoomOut-Shining"}
ColorProp={"theme"}
SizeProp={"medium"}
RoundedProp={"medium"}
/> */}