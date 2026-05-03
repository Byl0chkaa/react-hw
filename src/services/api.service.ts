const baseUrl = 'https://jsonplaceholder.typicode.com'

export const getAll = async<T> (endpoint: string) => {
    const responseData = await fetch(`${baseUrl}${endpoint}`).then((res:Response) => res.json());
    return responseData as T;
}

