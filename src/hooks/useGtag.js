export const useGtag = () => {
    const fireEvent = (eventName, payload = undefined) => {
        gtag('event', eventName, payload)
    }   

    const gtagSet = (object) => {
        gtag('set', object)
    }

    return { fireEvent, gtagSet }
}