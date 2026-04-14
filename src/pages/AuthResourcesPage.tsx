import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";

export const AuthResourcesPage = () => {
    useEffect(() => {
        // function that loads information from an authenticated point
        loadAuthProducts().then(products => {
            console.log(products);
            // catching errors
        }).catch(reason => {
            console.log(reason);
            // refreshing token
            refresh()
                .then(() => loadAuthProducts())
                .then(value => console.log(value))
        });
    }, []);

    return (
        <>
            auth
        </>
    );
};