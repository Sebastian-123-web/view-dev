

export const DataUser = () => {
    try {
        const response = fetch(`database.json`)
        return response;
    } catch (error) {
        console.log(error.message);
    }
}