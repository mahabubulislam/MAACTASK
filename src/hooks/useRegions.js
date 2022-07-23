import { useEffect, useState } from "react"

const useRegions = () => {
    const [regions, setRegions] = useState([])
    useEffect(() => {
        fetch('https://staging-api.erpxbd.com/api/v1/region/all/1', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setRegions(data?.region)
            })
    }, [])
    return [regions]
}
export default useRegions