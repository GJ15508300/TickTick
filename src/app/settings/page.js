"use client"; 
import { useAppContext } from '../context/AppContext';

export default function Settings() {
    const { user, setUser } = useAppContext();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h1>Settings Page</h1>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={user?.name}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={user?.email}
                onChange={handleChange}
            />
        </div>
    );
}