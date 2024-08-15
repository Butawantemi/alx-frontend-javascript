import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, filename) {
    const user = signUpUser(firstName, lastName);
    const photo = uploadPhoto(filename);
    

    return Promise.allSettled([user, photo]).then((reponse) => {
        let result = [];
        for (const res of responses) {
            if (res.status === 'fulfilled') {
              results.push({
                status: res.status,
                value: res.value,
              });
            } else {
              results.push({
                status: res.status,
                value: `Error: ${res.reason.message}`,
              });
            }
          }
    })
}