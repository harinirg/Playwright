import {test,expect} from "@playwright/test"
test.describe("E-commerce",()=>{
    test("Login",async({page})=>{
        console.log("Login");
    })
    test("InvalidLogin",async({page})=>{
        console.log("InvalidLogin");
    })
});
/*test.describe.only("Shopping",()=>{
    test("search",async({page})=>{
        console.log("search");
    })
    test("cart",async({page})=>{
        console.log("cart");
    })
});*/

