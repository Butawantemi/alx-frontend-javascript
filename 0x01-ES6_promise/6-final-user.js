import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, filename) {
    const user = signUpUser(firstName, lastName);
    const photo = uploadPhoto(filename);
    

    return Promise.allSettled([user, photo]).then((reponse) => {
        let result = [];
        reponse.forEach((value) => {
            if (value.status === 'fulfilled') {
                result.push(value.value);
            }else{
                result.push(value.reason);
            }
        })
    })
}