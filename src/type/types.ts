export type TYPElogoProps = {
    width:number
    height:number
    color:string
    marginLeft?:number
    marginRight?:number
    cursor?:boolean
}

export type TYPEwrapperProps = {
    children:React.ReactNode
    className:string
}

export type TYPEnavbarItem = {
    children:React.ReactNode
    rightLine?:boolean
    
}
export type TYPECarousel = {
    children:React.ReactNode
    
}

export type TYPEinputProps = {
    rootClass?:string
    leftIcon?:React.ReactNode
}

export type TYPEheaderProps = {
    children:React.ReactNode
}

export type bannerResponse = {
    image:string 
    image2:string
    text:string 
    title1:string
}

export type homeprops = {
    banner:{
        image:string 
        image2:string
        text:string 
        title1:string
    }
}