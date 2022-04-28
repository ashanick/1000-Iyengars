import { useRouter } from 'next/router';
import useSWR from 'swr'
import IndivMemoryDetail from '../../../components/memories/indiv-memory-detail';

const fetcher = async(url) => {
    const res = await fetch(url)
    const data = await res.json()
    console.log('In fetcher')
    if (res.status !=200) {
        throw new Error(data.message)
    }
    return data
}

function MemoryDetailPage () {
    const router = useRouter();
    const memoryId = router.query.memoryId
    console.log('MemoryId : ', memoryId)
    if (memoryId === null){
        return (
            <div>Please send request with correct memory credentials</div>
        )
    }

    const {data, error} = useSWR(
        ()=> memoryId && `/api/memory/${memoryId}`, 
        fetcher
    )
    
    if (error) {
        return (
            <div>
                <h1>Alas .... Alas</h1>
            </div>
        )
    }

    if (!data) {
        return (
            <div>Please wait ... fetching data</div>
        )
    }
    var name = data.data[0].name
    console.log('Data', name)
    return (
        <div>
            <IndivMemoryDetail items={data.data} />
        </div>
    )
}

export default MemoryDetailPage