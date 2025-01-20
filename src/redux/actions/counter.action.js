export const incrementCounter = () => {
    console.log("---[inside action creator - incrementCounter]---");
    console.log("---[action invoked]---");
    return {
        type: 'INCREMENT', // type is mandatory
        payload: 'dummy increment action payload'
    }
}

export const decrementCounter = () => {
    console.log("---[inside action creator - decrementCounter]---");
    console.log("---[action invoked]---");
    return {
        type: 'DECREMENT', // type is mandatory
        payload: 'dummy decrement action payload'
    }
}

export const resetCounter = () => {
    console.log("---[inside action creator - resetCounter]---");
    console.log("---[action invoked]---");
    return {
        type: 'RESET', // type is mandatory
        payload: 1000
    }
}