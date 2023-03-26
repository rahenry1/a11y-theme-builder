import { Storage } from "a11y-theme-builder-sdk";
import { Http } from './Http';

export class ServerStorage implements Storage {
    private http: Http = Http.getInstance();

    public async get(key: string): Promise<string> {
        const response = await this.http.get("/api/themes/" + key);
        //console.log(`get(${key}) => ${JSON.stringify(response.data)}`);
        return JSON.stringify(response.data);
    }

    public async set(key: string, value: string) {
        console.log(`ServerStorage.set(${key})`);
        const data = JSON.parse(value);
        //console.log(`data = ${JSON.stringify(data)}`)
        const keys = await this.listKeys();
        if (keys.indexOf(key) > -1) {
            const response = await this.http.patch(`/api/themes/${key}`, data);
            delete response.data.id;
            //console.log(`set(${key}) PATCH => ${JSON.stringify(response.data)}`);               
        }
        else {
            data.id = key;
            const response = await this.http.post(`/api/themes`, data);
            //console.log(`set(${key}) POST => ${JSON.stringify(response.data)}`);               
        }
    }

    public async delete(key: string) {
        const response = await this.http.delete(`/api/themes/${key}`);
        //console.log(`delete(${key}) => ${JSON.stringify(response.data)}`);
    }

    public async listKeys(): Promise<string[]> {
        console.log(`ServerStorage.listKeys()`);
        const response = await this.http.get("/api/themes");
        console.log(`listKeys => ${JSON.stringify(response.data)}`);
        return response.data;
    }
}