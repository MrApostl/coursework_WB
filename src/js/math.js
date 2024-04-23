const getUniqId = () =>{
    return Math.floor(Math.random() * 9999);
}

const getRoundNum = (num, depth) =>{
    return num.toFixed(depth);
}

export {getUniqId, getRoundNum}