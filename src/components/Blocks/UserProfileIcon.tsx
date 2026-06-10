import { CircleUserRound } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export function UserProfileIcon() {
    const [isHovered, setIsHovered] = useState(false);
    const {logout} = useAuth()

    return (
    <div className="relative" onMouseEnter={() => setIsHovered(true)} onClick={() => setIsHovered(!isHovered)}>
        <CircleUserRound color="#99a1af "/>
        <button className={`absolute right-0 text-sm  top-7 bg-gray-400 p-1 rounded-xs ${isHovered?'flex' : 'hidden'}`} onClick={logout}>Logout</button>
    </div>
    )
}
