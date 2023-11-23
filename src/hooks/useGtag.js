export const useGtag = () => {
    const fireEvent = (eventName, payload = undefined) => {
        gtag('event', eventName, payload)
    }   

    return {
        fireEvent
    }
}