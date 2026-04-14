import {useEffect} from "react";
import {login} from "../services/api.service.ts";

export const LoginPage = () => {
    useEffect(() => {
        // function login with existing user
        login({
            username: "emilys",
            password: "emilyspass",
            expiresInMins: 1
        })
    }, []);
    return (
        <>
login
        </>
    );
};