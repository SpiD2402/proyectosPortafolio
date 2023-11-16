import { config } from "./config";


export const searchUsers = async(username)=>{

    try{
        const response = await fetch(
                `${config.baseUrl}/search/users?q=${username}`
        );
        const data = await response.json();
        return data;
    }
    catch(error){
        return error;
    }

}

//funcion que trae el detalle de cada usuario
export const searchUser = async(username)=>{


    try{
        const response = await fetch(

            `${config.baseUrl}/users/${username}`
        )
        const data = await response.json();
        return data;
    }
    catch(error){

        return error;
    }
}

//esta funcion traera los repositorios publicos del usuario

export const getRepos = async(username)=>{


    try{
        const response =await fetch(
            `${config.baseUrl}/users/${username}/repos?sort=created`
        );
        const data = await response.json();
        return data;

    }
    catch(error){   
        return error;
    }

}