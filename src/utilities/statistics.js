export const averageAge = (data)=>{
    const reducer = (accumulator, currentValue) => accumulator + Number(currentValue.dob.age);
    const sum = data.reduce(reducer,0);
    return Math.round(sum/data.length);
}

export const oldestPerson = (data)=>{
    const reducer = (accumulator, currentValue) => (accumulator.dob.age < Number(currentValue.dob.age)? currentValue:accumulator);
    return data.reduce(reducer);
}

export const youngestPerson = (data)=>{
    const reducer = (accumulator, currentValue) => (accumulator.dob.age > Number(currentValue.dob.age)? currentValue:accumulator);
    return data.reduce(reducer);
}

export const northernMostPerson = (data)=>{
    const reducer = (accumulator, currentValue) => (accumulator.location.coordinates.latitude < Number(currentValue.location.coordinates.latitude)? currentValue:accumulator);
    return data.reduce(reducer);
}

export const southernMostPerson = (data)=>{
    const reducer = (accumulator, currentValue) => (accumulator.location.coordinates.latitude > Number(currentValue.location.coordinates.latitude)? currentValue:accumulator);
    return data.reduce(reducer);
}