export const requestPostInfos = async(url, data) => {
    let obj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'payload': data,
        })
    };

    let results = fetch(url, obj)
        .then((res) => res.json())
        .then(data => {
            return data;
        })

        .catch((error) => {
            console.log(error);
        });
    return await results;
}