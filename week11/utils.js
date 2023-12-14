const sum = (n1,n2) => {
    return n1 + n2
}

const minus = (n1,n2) => {
    return n1 - n2
}

const section = 'Group1'
// module.exports = {sum : sum, section : section} // Destructuring
//ES module
export {sum as default, section , minus}