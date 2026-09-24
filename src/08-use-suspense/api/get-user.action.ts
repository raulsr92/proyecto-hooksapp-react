
export interface User{
    id: number,
    name: string,
    location: string,
    role: string
}


export const getUserAction = async(id:number)=>{

    //Simular retrado de 2 seg

        await new Promise( (res)=>setTimeout(res,200))

    return{
        id: id,
        name: 'Raul Sanchez',
        location:'Lima, Perú',
        role: 'Developer Jr'

    }
}
