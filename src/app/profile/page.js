"use client"; 
import { useAppContext } from "../context/AppContext";


export default function Profile() {
    const { user } = useAppContext();
    return (
        <div>
            <h1>Profile Page</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}