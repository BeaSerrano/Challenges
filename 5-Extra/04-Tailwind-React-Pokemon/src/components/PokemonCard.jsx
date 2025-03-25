const PokemonCard = ({ dataPokemonProp }) => { // prop
    if (!dataPokemonProp) return null

    return (
        <div className='mi-bg shadow-lg rounded-lg p-4 border border-gray-200 flex flex-col items-center'>
            <h2 className='text-xl font-bold text-gray-800 uppercase underline'>{dataPokemonProp.name}</h2>
            <img 
                className='w-50 h-50 m-1' 
                src={dataPokemonProp.sprites?.front_default} 
                alt={dataPokemonProp.name} 
            />
            <p className='bg-yellow-300 text-gray-900 px-5 py-1 rounded-full text-sm font-semibold'>{dataPokemonProp.types?.map(type => type.type.name)}</p>
        </div>
    )
}

export default PokemonCard