function IndivMemoryDetail(props){
    const {id, name, heading1, title, imageURL} = props.items[0]
    console.log('Indiv Memory Details : ', props.items[0].name)
    return (
        <div>
            Indiv Memory details, {name}
        </div>
    )
}

export default IndivMemoryDetail