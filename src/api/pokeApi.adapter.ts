import axios from "axios";


export interface HttpAdapter{
    get<T>(url: string): Promise<T>;
    // post: void;
    // patch: void;
    // delete: void;
}


export class PokeApiFetchAdapter implements HttpAdapter{

    async get<T>( url: string): Promise<T>{
        // petición get
        const resp = await fetch(url);
        const data: T = await resp.json();
        console.log("con Fetch");
        return data;
    }

}

export class PokeApiAdapter implements HttpAdapter {

    private readonly axios = axios;

    async get<T>( url: string): Promise<T>{
        // petición get
        const { data } = await this.axios.get<T>(url);
        console.log("con Axios");

        return data;
    }

    async post( url: string, data: any){

    }

    async patch( url: string, data: any){
        
    }

    async delete( url: string, data: any){
        
    }

}