import { uploadPhoto, createUser } from "./utils.js";

export default async function asyncUploadUser(){
    let value;
    let result = [];
    try {
        value = {
            photo: uploadPhoto(),
            user: createUser()
        }
    }catch (error) {
        value = {
            photo: null,
            user: null
        }
    } 
   return value;
}