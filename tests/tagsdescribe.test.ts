import {test,expect} from "@playwright/test"
test.describe("Authentication",{tag:"@smoke"},()=>{
    test("Login",async({page})=>{
        console.log("Login");
    });
    test("Logout",async({page})=>{
        console.log("Logout");
    })

})