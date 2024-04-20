const moement = require("moment/moment")

const formatDate = (date) => {
    return moement(date).format("MM/DD/YYYY")
}

export default formatDate