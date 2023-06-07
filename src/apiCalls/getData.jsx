async function getData() {

    const url = "https://hodlinfo-backend-vert.vercel.app/";
    try {

        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(err) {

        throw new Error("Something went wrong");
    }
}

export default getData;