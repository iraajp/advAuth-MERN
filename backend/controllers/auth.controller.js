export const join= async (req, res) => {
    res.send("Joining...");
}
export const access  = async (req, res) => {
    res.send("Accessing...");
    console.log("Accessing...");
}
export const exit = async (req, res) => {
    res.send("Exiting...");
}