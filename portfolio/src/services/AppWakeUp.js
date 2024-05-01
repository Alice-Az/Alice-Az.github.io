const baseUrl = "https://alice-topstyle-api.azurewebsites.net/";

//To warm up TopStyle API
export const FetchProduct = async () => {
    let url = `${baseUrl}product/1`;

    return await fetch(url);
};
