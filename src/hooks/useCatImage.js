import { useEffect, useState } from "react"

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!fact) return

        const firstWord = fact.split(' ')[0]
        console.log(firstWord)

        fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
        .then(res => res.json())
        .then(response => {
            const {url} = response
            setImageUrl(url)
    })
}, [fact])

return {imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}