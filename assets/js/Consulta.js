let personajes = (async () => {
    const url = "http://localhost:5500/dbz.json";// "/dbz.json"
    
        const res = await fetch(url);
        const data = await res.json();
        return data
    

    //return { getData };
})();

export default personajes;