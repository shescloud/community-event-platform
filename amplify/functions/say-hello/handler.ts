import { Schema } from "../../data/resource";

export const handler: Schema["sayHello"]["functionHandler"] = async (event) => {
    // arguments types from `.arguments()`
    const { name } = event.arguments;
    // return typed from `.returns()`
    return `Hello, ${name}!`
}