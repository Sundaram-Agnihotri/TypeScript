function consoleError(errmsg : string) : void {
    console.log(errmsg);

    // string is the type of argument 
    // void is the type of return or console message
}

//error handling
function handleError(errmsg : string) : never {
    throw new Error(errmsg);
}